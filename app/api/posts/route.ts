import { saveFile } from "@app/api/_utils/multerConfig";
import { prisma } from "@app/api/_utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query") || "";
    const category = searchParams.get("category");
    const limit = parseInt(searchParams.get("limit") || "10");
    const page = parseInt(searchParams.get("page") || "1");
    const isPopular = searchParams.get("isPopular");
    const all = searchParams.get("all") === "true" || false;
    const skip = (page - 1) * limit;
    const lang = request.headers.get("accept-language");

    const where = {
      AND: [
        query
          ? {
              OR: [
                { title: { contains: query, mode: "insensitive" as const } },
                { content: { contains: query, mode: "insensitive" as const } },
              ],
            }
          : {},
        category ? { category: { name: category } } : {},
        isPopular ? { isPopular: isPopular === "true" } : {},
        lang && !all ? { lang: lang } : {},
      ],
    };

    const [total, posts] = await Promise.all([
      prisma.post.count({ where }),
      prisma.post.findMany({
        where,
        select: {
          title: true,
          thumbnail: true,
          slug: true,
          content: true,
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
    ]);

    return NextResponse.json({
      posts,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { message: "Failed to fetch posts" },
      { status: 400 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const categoryName = formData.get("category") as string;
    const isPopular = formData.get("isPopular") === "true";
    const lang = (formData.get("lang") as string) || "en";

    if (!title) {
      return Response.json({ message: "Title is required" }, { status: 400 });
    }

    if (title.length < 3) {
      return Response.json(
        { message: "Title must be at least 3 characters long" },
        { status: 400 },
      );
    }

    if (!content) {
      return Response.json({ message: "content is required" }, { status: 400 });
    }

    if (content.length < 10) {
      return Response.json(
        { message: "Content must be at least 50 characters long" },
        { status: 400 },
      );
    }

    if (!categoryName) {
      return Response.json(
        { message: "category is required" },
        { status: 400 },
      );
    }

    if (categoryName.length < 3) {
      return Response.json(
        { message: "Category name must be at least 3 characters long" },
        { status: 400 },
      );
    }

    if (!lang) {
      return Response.json({ message: "lang is required" }, { status: 400 });
    }

    if (lang !== "ar" && lang !== "en") {
      return Response.json(
        { message: "lang must be 'ar' or 'en'" },
        { status: 400 },
      );
    }

    const thumbnailUrl = await saveFile(formData);

    let category = await prisma.category.findUnique({
      where: { name: categoryName },
    });

    if (!category) {
      category = await prisma.category.create({
        data: { name: categoryName },
      });
    }

    const post = await prisma.post.create({
      data: {
        title,
        thumbnail: thumbnailUrl,
        content,
        isPopular,
        lang,
        slug: slugify(title),
        categoryId: category.id,
      },
      include: { category: true },
    });

    return Response.json(post, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Failed to create post: " + error },
      { status: 500 },
    );
  }
}

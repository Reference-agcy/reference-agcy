import { prisma } from "@app/api/_utils/prisma";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const limit = parseInt(searchParams.get("limit") || "10");
  const page = parseInt(searchParams.get("page") || "1");

  try {
    const skip = (page - 1) * limit;
    const where = query
      ? { name: { contains: query, mode: "insensitive" as const } }
      : {};

    const [total, categories] = await Promise.all([
      prisma.category.count({ where }),
      prisma.category.findMany({
        where,
        skip,
        take: limit,
        include: { posts: true },
      }),
    ]);

    return Response.json({
      categories,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Categories API Error:", error);
    return Response.json(
      { message: "Failed to fetch categories" },
      { status: 400 },
    );
  }
}

import { prisma } from "@app/api/_utils/prisma";
import fs from "fs";
import path from "path";
import slugify from "slugify";
import { saveFile } from "../../_utils/multerConfig";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  try {
    const post = await prisma.post.findUnique({
      where: { slug: params.slug },
      include: { category: true },
    });

    if (!post) {
      return Response.json({ error: "Post not found" }, { status: 404 });
    }

    return Response.json(post);
  } catch (error) {
    return Response.json(
      { message: "Failed to fetch post" + error },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } },
) {
  try {
    const post = await prisma.post.findUnique({
      where: { slug: params.slug },
      select: { thumbnail: true },
    });

    if (!post) {
      return Response.json({ error: "Post not found" }, { status: 404 });
    }

    // Delete thumbnail file if it exists
    if (post.thumbnail) {
      const thumbnailPath = path.join(process.cwd(), "public", post.thumbnail);
      if (fs.existsSync(thumbnailPath)) {
        fs.unlinkSync(thumbnailPath);
      }
    }

    await prisma.post.delete({
      where: { slug: params.slug },
    });

    return Response.json({ message: "Post deleted successfully" });
  } catch (error) {
    return Response.json(
      { message: "Failed to delete post: " + error },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { slug: string } },
) {
  try {
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const categoryName = formData.get("category") as string;
    const isPopular = formData.get("isPopular") === "true";
    const lang = formData.get("lang") as string;

    const post = await prisma.post.findUnique({
      where: { slug: params.slug },
      include: { category: true },
    });

    if (!post) {
      return Response.json({ error: "Post not found" }, { status: 404 });
    }

    let thumbnailUrl = post.thumbnail;
    const newThumbnail = formData.get("thumbnail") as File;

    if (newThumbnail && typeof newThumbnail !== "string") {
      // Delete old thumbnail if it exists
      if (post.thumbnail) {
        const oldThumbnailPath = path.join(
          process.cwd(),
          "public",
          post.thumbnail,
        );
        if (fs.existsSync(oldThumbnailPath)) {
          fs.unlinkSync(oldThumbnailPath);
        }
      }
      thumbnailUrl = await saveFile(formData);
    }

    let category = await prisma.category.findUnique({
      where: { name: categoryName },
    });

    if (!category) {
      category = await prisma.category.create({
        data: { name: categoryName },
      });
    }

    const updatedPost = await prisma.post.update({
      where: { slug: params.slug },
      data: {
        title: title || post.title,
        slug: title ? slugify(title) : post.slug,
        content: content || post.content,
        thumbnail: thumbnailUrl,
        isPopular: isPopular,
        lang: lang || post.lang,
        categoryId: category.id,
      },
      include: { category: true },
    });

    return Response.json(updatedPost);
  } catch (error) {
    return Response.json(
      { message: "Failed to update post: " + error },
      { status: 500 },
    );
  }
}

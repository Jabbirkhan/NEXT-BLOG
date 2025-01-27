// app/api/blog/route.js
import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/config/models/BlogModel";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
const fs = require("fs");
import { promisify } from "util";
import { unlink } from "fs";

const unlinkAsync = promisify(unlink);

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

// API Endpoint for uploading blog data into database
export async function POST(request) {
  await ConnectDB();
  try {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;

    const blogData = {
      title: `${formData.get("title")}`,
      description: `${formData.get("description")}`,
      category: `${formData.get("category")}`,
      author: `${formData.get("author")}`,
      image: `${imgUrl}`,
      authorImg: `${formData.get("authorImg")}`,
    };

    await BlogModel.create(blogData);
    return NextResponse.json({ success: true, msg: "Blog Added" });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json({ msg: "Error creating blog" }, { status: 500 });
  }
}

// API Endpoint for fetching all blogs
export async function GET(request) {
  await ConnectDB();
  try {
    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      return NextResponse.json(blog);
    } else {
      const blogs = await BlogModel.find({});
      return NextResponse.json({ blogs });
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ msg: "Error fetching blogs" }, { status: 500 });
  }
}

// API Endpoint to delete a specific blog
export async function DELETE(request) {
  await ConnectDB();
  try {
    const id = request.nextUrl.searchParams.get("id");
    const blog = await BlogModel.findById(id);
    if (!blog) {
      return NextResponse.json({ msg: "Blog not found" }, { status: 404 });
    }

    // Delete the image from the filesystem
    await unlinkAsync(`./public${blog.image}`);

    // Delete the blog from the database
    await BlogModel.findByIdAndDelete(id);

    return NextResponse.json({ msg: "Blog Deleted" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json({ msg: "Error deleting blog" }, { status: 500 });
  }
}

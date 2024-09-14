import Blog from "@/models/blog";
import { NextResponse } from "next/server";
import dbConnect from "@/db";

export async function GET() {
  try {
    await dbConnect();
    const extractAllBlogs = await Blog.find({});
    if (extractAllBlogs) {
      return NextResponse.json({
        success: true,
        data: extractAllBlogs,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong | Please try again",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong | Please try again",
    });
  }
}

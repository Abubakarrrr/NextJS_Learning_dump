import dbConnect from "@/db";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";
import Joi from "joi";

const EditBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function PUT(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const getCurrentBlogId = searchParams.get("id");
    if (!getCurrentBlogId) {
      return NextResponse.json({
        success: false,
        message: "blog id required",
      });
    }
    const { title, description } = await req.json();
    const { error } = EditBlog.validate({
      title,
      description,
    });
    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }
    const newBlog = await Blog.findByIdAndUpdate(
      { _id: getCurrentBlogId },
      { title, description },
      { new: true }
    );
    if (newBlog) {
      return NextResponse.json({
        success: true,
        message: "Blog updated successfully",
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

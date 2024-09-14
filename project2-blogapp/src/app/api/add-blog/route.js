import dbConnect from "@/db";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";
import Joi from 'joi'

const AddNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function POST(req) {
  try {
    await dbConnect();
    const extractBlogData = await req.json();
    const { title, description } = extractBlogData;
    const { error } = AddNewBlog.validate({
      title,
      description,
    });
    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const newlyCreatedBlog = await Blog.create(extractBlogData);
    if (newlyCreatedBlog) {
      return NextResponse.json({
        success: true,
        message: "Blog created successfully",
      });
    } else {
      return NextResponse.json({
        success: true,
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

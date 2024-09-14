import dbConnect from "@/db";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    // console.log(req.url ,searchParams)
    const getCurrentBlogID = searchParams.get("id");

    if (!getCurrentBlogID) {
      return NextResponse.json({
        success: false,
        message: "Blog id is required",
      });
    }

    const deleteCurrentBlogByID = await Blog.findByIdAndDelete(getCurrentBlogID)
    if(deleteCurrentBlogByID){
        return NextResponse.json({
            success: true,
            message: "Blog deleted successfully",
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

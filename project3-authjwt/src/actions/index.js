"use server";

import { dbConnect } from "@/db";
import User from "@/models";
import bcryptjs from "bcryptjs";

export async function registerUserAction(formData) {
  await dbConnect();
  try {
    const { userName, email, password } = formData;
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return {
        success: false,
        message: "User already exists ! Please try with different email",
      };
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newlyCreatedUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
    const savedUser = await newlyCreatedUser.save();
    if (savedUser) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(savedUser)),
      };
    } else {
      return {
        success: false,
        message: "Something went wrong",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something when wrong",
    };
  }
}

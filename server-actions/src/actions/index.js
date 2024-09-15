"use server";

import dbConnect from "@/db";
import user from "@/models/User";
import { revalidatePath } from "next/cache";

export async function fetchListOfProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data?.products;
}

//add new user actions

export async function addNewUserAction(formData, pathToRevalidate) {
  await dbConnect();
  try {
    const newlyCreatedUser = await user.create(formData);
    if (newlyCreatedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "User added successfully",
      };
    } else {
      return {
        success: false,
        message: "Some error occured! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some error occured! Please try again",
    };
  }
}

//fetch user actions
export async function fetchUsersAction() {
  await dbConnect();
  try {
    const users = await user.find({});
    if (users) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(users)),
      };
    } else {
      return {
        success: false,
        message: "Some error occured! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some error occured! Please try again",
    };
  }
}

//edit user actions
export async function EditUserAction(
  currentUserID,
  formData,
  pathToRevalidate
) {
  await dbConnect();
  try {
    const { firstName, lastName, email, address } = formData;
    const updatedUser = await user.findOneAndUpdate(
      { _id: currentUserID },
      { firstName, email, lastName, address },
      { new: true }
    );
    if (updatedUser) {
      revalidatePath(pathToRevalidate)
      return {
        success: true,
        message: "User updated successfully",
      };
    } else {
      return {
        success: false,
        message: "Some error occured! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some error occured! Please try again",
    };
  }
}

//delete user actions

export async function DeleteUserAction(currentUserId, pathToRevalidate) {
  await dbConnect();
  try {
    const deletedUser = await user.findByIdAndDelete(currentUserId);
    if (deletedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "User deleted successfully",
      };
    } else {
      return {
        success: false,
        message: "Some error occured! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some error occured! Please try again",
    };
  }
}

"use client";

import { useEffect, useState } from "react";
import AddNewBlog from "../add-new-blog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const initialBlogFormData = {
  title: "",
  description: "",
};
export default function BlogOverview({ blogList }) {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);

  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);
  //   console.log(blogFormData);

  async function handleSaveBlogData() {
    try {
      const response = await fetch("/api/add-blog", {
        method: "POST",
        body: JSON.stringify(blogFormData),
      });
      const result = await response.json();
      if (result?.success) {
        setBlogFormData(initialBlogFormData);
        setOpenBlogDialog(false);
        setLoading(false);
        router.refresh();
      }
      // console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  }

  async function handleDeleteBlogByID(getCurrentId){
    console.log(getCurrentId)
    try {
       const response = await fetch(`/api/delete-blog/?id=${getCurrentId}`,{
        method:'DELETE'
       })
       const result = await response.json()
       if(result?.success){
          router.refresh()
       }
    } catch (error) {
       console.log(error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-500 p-6">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
        loading={loading}
        setLoading={setLoading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        handleSaveBlogData={handleSaveBlogData}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {blogList && blogList.length > 0
          ? blogList.map((blogitem) => {
              return (
                <Card className="p-5">
                  <CardContent>
                    <CardTitle className="mb-5">{blogitem?.title}</CardTitle>
                    <CardDescription>{blogitem?.title}</CardDescription>
                    <div className="flex gap-5 items-center mt-5">
                      <Button>Edit</Button>
                      <Button
                        onClick={() => handleDeleteBlogByID(blogitem._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          : (<p className="text-3xl font-extrabold">No blog found</p>)}
      </div>
    </div>
  );
}

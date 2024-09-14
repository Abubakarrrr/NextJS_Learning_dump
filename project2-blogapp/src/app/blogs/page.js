import BlogOverview from "@/components/blog-overview";

async function fetchListOfBlogs() {
    try {
        const apiResponse = await fetch("http://localhost:3000/api/get-blog", {
          method: "GET",
          cache: "no-store",
        });
    
        const result = await apiResponse.json();
         
        return result?.data;
      } catch (error) {
        throw new Error(error);
      } 
}

async function blog() {
  const blogList = await fetchListOfBlogs();
//   console.log(blogList)
  return (
    <div>
      <BlogOverview blogList={blogList} />
    </div>
  );
}
export default blog;

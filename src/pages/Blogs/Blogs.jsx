import { useLoaderData } from "react-router-dom";
import BlogCards from "../BlogCards/BlogCards";

const Blogs = () => {
  const blogs = useLoaderData();
//   console.log(blogs);
  return (
    <div>
      <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl font-montserrat pt-5 text-center border-gray-800 border-b-4 w-1/4 mx-auto">
        Blogs
      </h2>
      <div className="grid grid-col-1 font-montserrat p-5 gap-5">
        {blogs.map((blog) => (
          <BlogCards blog={blog} key={blog.id}></BlogCards>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

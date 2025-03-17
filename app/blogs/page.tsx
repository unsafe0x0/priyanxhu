import React from "react";
import { Blogs } from "@/components/Blogs";

const BlogsPage: React.FC = () => {
  return (
    <main className="space-y-12 py-8 flex flex-col justify-start items-center min-h-screen">
      <Blogs />
    </main>
  );
};

export default BlogsPage;

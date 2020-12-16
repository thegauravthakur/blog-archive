import React from "react";
import PostCard from "./PostCard";
const Canvas = ({ posts }) => {
  return (
    <div className="bg-white  my-14  px-5 md:px-10 py-10 col-span-3 rounded-lg ">
      {posts.map((post) => (
        <PostCard key={post.id} postDetail={post} />
      ))}
    </div>
  );
};

export default Canvas;

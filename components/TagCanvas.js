import React from "react";
import PostCard from "./PostCard";
import {useRouter} from 'next/router';

const TagCanvas = ({ posts }) => {
  const router = useRouter();
  const {slug} = router.query;
  console.log(slug);
  return (
    <div className="bg-white  my-14  px-5 md:px-10 py-10 col-span-3 rounded-lg dark:bg-deepDarkGray">
      <h1 className="text-xl py-2 text-center border-t-2 border-b-2 border-black dark:border-gray-500 dark:text-gray-400 mb-7">Articles with "<span className='text-red-600 font-semibold dark:text-blue-600'>{slug}</span>" tag</h1>
      {posts.map((post) => (
        <PostCard key={post.id} postDetail={post} />
      ))}
    </div>
  );
};

export default TagCanvas;

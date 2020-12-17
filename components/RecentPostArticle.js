import React from "react";
import Image from "next/image";

const RecentPostArticle = ({ post }) => {
  const { title, postImage } = post;

  return (
    <div className="pb-5">
      <Image
        className="rounded-lg"
        src={postImage}
        width={700}
        height={400}
        alt={""}
      />
      <h2 className="col-span-2 text-md mt-3 font-semibold text-gray-700 dark:text-gray-400">
        {title}
      </h2>
    </div>
  );
};

export default RecentPostArticle;

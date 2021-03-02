import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RecentPostArticle = ({post}) => {
  const {title, postImage, id} = post;
  return (
    <Link href={id}>
      <div className="pb-5 cursor-pointer">
        <Image
          className="rounded-lg"
          src={postImage}
          width={700}
          height={400}
          alt={''}
        />
        <h2
          className="col-span-2 text-md mt-3 font-semibold text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-blue-500 transition duration-500 ease-in-out cursor-pointer">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default RecentPostArticle;

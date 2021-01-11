import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineTags, AiOutlineShareAlt } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { useMediaQuery } from "react-responsive";
import TextTruncate from "react-text-truncate";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { convertTimestampToDate } from "../utils/convertTimestampToDate";

const PostCard = ({ postDetail }) => {
  const { postDescription, postImage, title, lastUpdated, id } = postDetail;
  const dateAndTime = convertTimestampToDate(lastUpdated);
  const lastUpdatedDay = dateAndTime.date;
  const lastUpdatedMonth = dateAndTime.month;
  const lastUpdatedYear = dateAndTime.year;
  const router = useRouter();
  const isMd = useMediaQuery({ query: "(min-width: 1300px)" });

  return (
    <div className="mb-14 dark:text-gray-300">
      <Link href={id}>
        <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 dark:hover:text-blue-500 hover:text-red-700 cursor-pointer transition duration-500 ease-in-out">
          {title}
        </h1>
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-2xl pt-2">
        <div className="flex items-center gap-1">
          <IoCalendarOutline />
          <p>{`${lastUpdatedMonth} ${lastUpdatedDay}, ${lastUpdatedYear}`}</p>
        </div>
        <div className="flex items-center gap-1">
          <AiOutlineTags />
          <p>JavaScript Guide</p>
        </div>
        <div className="flex items-center gap-1">
          <AiOutlineShareAlt />
          <p>No Shares</p>
        </div>
        <div className="flex items-center gap-1">
          <GoCommentDiscussion />
          <p>No Comments</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 pt-5 gap-5 ">
        <div
          onClick={() => router.push(id)}
          className="col-span-3 sm:col-span-2 cursor-pointer"
        >
          <Image
            className="rounded-lg self-center"
            src={postImage}
            height={400}
            width={700}
            alt={"post"}
          />
        </div>
        <div className="max-w-lg mx-auto col-span-3 flex flex-col justify-between items-start">
          <TextTruncate
            line={isMd ? 4 : 3}
            element="span"
            truncateText="…"
            text={postDescription}
            className="font-sans text-md leading-7 dark:text-gray-400 text-gray-600"
            // textTruncateChild={<a href="#">Read on</a>}
          />
          <Link href={id}>
            <button className="focus:outline-none bg-gray-700 dark:bg-blue-600 dark:hover:bg-blue-700 hover:bg-red-900 text-white py-1 sm:py-2 px-4 rounded-lg mt-5 sm:mt-0 transition  ease-in-out transform hover:-translate-y-1 duration-300 hover:scale-100">
              Read More
            </button>
          </Link>
        </div>
      </div>
      <hr className="border-t-2 mt-14 w-56 mx-auto sm:hidden " />
    </div>
  );
};

export default PostCard;

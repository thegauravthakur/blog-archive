import React, { useEffect } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineTags, AiOutlineShareAlt } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { useMediaQuery } from "react-responsive";
import TextTruncate from "react-text-truncate";
import { useRouter } from "next/router"; // recommend

const PostCard = ({ postDetail }) => {
  const { postDescription, postImage, title, lastUpdated, id } = postDetail;
  const lastUpdatedDay = lastUpdated.toDate().toString().split(" ")[0];
  const lastUpdatedMonth = lastUpdated.toDate().toString().split(" ")[1];
  const lastUpdatedYear = lastUpdated.toDate().toString().split(" ")[2];
  const isMd = useMediaQuery({ query: "(min-width: 1300px)" });
  const router = useRouter();
  return (
    <div className="mb-14">
      <h1 className="text-2xl font-semibold text-gray-700">{title}</h1>
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
        <div className="col-span-2 ">
          <img
            src={
              "https://picsum.photos/700/450/?random&t=" +
              new Date().getTime() +
              ""
            }
            height={450}
            width={700}
            alt={"post"}
          />
        </div>
        <div className="max-w-lg mx-auto col-span-3 flex flex-col justify-between items-start">
          <TextTruncate
            line={isMd ? 5 : 3}
            element="span"
            truncateText="…"
            text={postDescription}
            className="font-sans text-md leading-7"
            // textTruncateChild={<a href="#">Read on</a>}
          />
          <button
            onClick={() => router.push(id)}
            className="focus:outline-none bg-gray-800 text-white py-1 sm:py-2 px-4 rounded-lg mt-5 sm:mt-0"
          >
            Read More
          </button>
        </div>
      </div>
      <hr className="border-t-2 mt-5 w-56 mx-auto sm:hidden" />
    </div>
  );
};

export default PostCard;

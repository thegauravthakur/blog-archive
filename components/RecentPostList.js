import React from "react";
import RecentPostArticle from "./RecentPostArticle";
import { useRecoilValue } from "recoil";
import { PostsState } from "../recoil/atom";

const RecentPostList = () => {
  const posts = useRecoilValue(PostsState);
  return (
    <div>
      {posts.slice(0, 2).map((post) => (
        <RecentPostArticle post={post} />
      ))}
    </div>
  );
};

export default RecentPostList;

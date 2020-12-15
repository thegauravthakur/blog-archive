import React, { useState, useEffect } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineShop, AiOutlineTags } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import PostCard from "./PostCard";
import firebase from "../firebase/clientApp";
import { useRecoilState } from "recoil";
import { PostsState } from "../recoil/atom";

const Canvas = ({ loading, setLoading }) => {
  const [posts, setPosts] = useRecoilState(PostsState);

  useEffect(() => {
    const db = firebase.firestore();
    const usersReference = db.collection("posts");
    usersReference.get().then((querySnapshot) => {
      const temp = [];
      querySnapshot.forEach((userDoc) => {
        const userDocData = userDoc.data();
        temp.push(userDocData);
      });
      setLoading(false);
      setPosts(temp.reverse());
    });
  }, []);
  if (loading) {
    return <h1>Page is loading...</h1>;
  }
  return (
    <div className="bg-white  my-14  px-5 md:px-10 py-10 col-span-3 rounded-lg">
      {posts.map((post) => (
        <PostCard key={post.id} postDetail={post} />
      ))}
    </div>
  );
};

export default Canvas;

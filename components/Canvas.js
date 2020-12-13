import React from 'react';
import {IoCalendarOutline, } from 'react-icons/io5';
import { AiOutlineShop, AiOutlineTags } from 'react-icons/ai';
import {GoCommentDiscussion} from 'react-icons/go';
import PostCard from './PostCard';

const Canvas = () => {
  return (
    <div className='bg-white  my-14  px-5 md:px-10 py-10 col-span-3'>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default Canvas;

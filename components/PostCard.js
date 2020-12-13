import React from 'react';
import { IoCalendarOutline } from 'react-icons/io5';
import { AiOutlineTags } from 'react-icons/ai';
import { GoCommentDiscussion } from 'react-icons/go';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive'
import TextTruncate from 'react-text-truncate'; // recommend

const PostCard = () => {
  const isMd = useMediaQuery({query: '(min-width: 1300px)'})
  return (
    <div className='mb-14'>
      <h1 className='text-2xl'>Best JavaScript Framework to Learn in 2021</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 max-w-xl pt-2'>
        <div className='flex items-center gap-1'><IoCalendarOutline/><p>August 5, 2020</p></div>
        <div className='flex items-center gap-1'><AiOutlineTags/><p>JavaScript Guide</p></div>
        <div className='flex items-center gap-1'><GoCommentDiscussion/><p>No Comments</p></div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-5 pt-5 gap-5 '>
        <div className='col-span-2'>
          <Image layout='responsive' src='/assets/images/JavaScript.png' height={450} width={700}/>
        </div>
        <div className='max-w-lg mx-auto col-span-3 flex flex-col justify-between items-start'>
          <TextTruncate
            line={isMd ? 5 : 3}
            element="span"
            truncateText="…"
            text="    Blogging has been known since the nineties.
          It was mainly used to share people’s day to day
          life, like a diary but online. When it became mainstream in the
          It was mainly used to share people’s day to day
          It was mainly used to share people’s day to day
          It was mainly used to share people’s day to day'"
            textTruncateChild={<a href="#">Read on</a>}
          />

          <button className='focus:outline-none bg-gray-800 text-white py-1 sm:py-2 px-4 rounded-lg mt-5 sm:mt-0'>Read
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

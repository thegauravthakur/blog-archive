import React from 'react';
import Image from 'next/image';

const RecentPostArticle = () => {
  return (
    <div className='pb-5'>
      <Image src='/assets/images/JavaScript.png' width={700} height={400} layout='responsive'/>
      <h2 className='col-span-2'>Best JavaScript Framework to Learn in 2021</h2>
    </div>
  );
};

export default RecentPostArticle;

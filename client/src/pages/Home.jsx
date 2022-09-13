import React from 'react';
import Posts from '../components/Posts';

function Home() {
  return (
    <div className='flex justify-center'>
      <div className='h-[1000px] w-[1064px] flex flex-row space-x-4'>
        <div className='sticky top-16 w-2/12 h-16 '>
          <div className='bg-white border-[1px] w-full h-full rounded-md'></div>
        </div>
        <div className='flex flex-col w-8/12 gap-2'>
          <Posts />
          <Posts />
          <Posts />
        </div>
        <div className='sticky z-0 top-16 duration-1000 w-2/12 h-16'>
          <div className='bg-white border-[1px] w-full h-full rounded-md'></div>
        </div>
      </div>
    </div>
  );
}

export default Home;

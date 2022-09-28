import React from 'react';

import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import { Outlet } from 'react-router-dom';
import SharePostButton from '../components/SharePostButton';

function Home() {
  return (
    <div className='flex justify-center px-2'>
      <div className='w-[560px] md:w-[1064px] flex flex-col md:flex-row md:gap-4 '>
        <LeftBar />
        <div className='flex flex-col w-full md:w-[80%] lg:6/12 gap-2'>
          {/* Mobil Post Share, hiding it when res > md */}
          <div className='md:hidden'>
            <SharePostButton />
          </div>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
}

export default Home;

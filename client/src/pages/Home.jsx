import React from 'react';

import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className='flex justify-center px-2'>
      <div className=' w-[1064px] flex flex-row space-x-4 '>
        <LeftBar />
        <div className='flex flex-col w-8/12 gap-2 h-'>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
}

export default Home;

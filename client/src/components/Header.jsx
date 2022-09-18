import { GiFoldedPaper } from 'react-icons/gi';
import { ImHome } from 'react-icons/im';
import { BiBookReader } from 'react-icons/bi';
import { MdSettingsSystemDaydream } from 'react-icons/md';
import { useAuthContext } from '../context/authContext';
import Profile from '../components/Profile';
import { useState } from 'react';
import Login from '../components/Login';
import { Link } from 'react-router-dom';

function Header() {
  const { user } = useAuthContext();
  const [loginHandle, setLoginHandle] = useState(false);

  const handleClickInside = () => {
    setLoginHandle(!loginHandle);
  };

  return (
    <div className='sticky z-10 top-0 h-14 bg-white w-full flex justify-center border-b-2'>
      <div className='w-[1080px]'>
        {/* NavBar */}
        <div className='h-full flex justify-between px-2'>
          {/* Logo */}
          <div className='flex items-center gap-2'>
            <GiFoldedPaper className='text-3xl text-primary' />
            <span className='text-2xl'>Blog Sayfam</span>
          </div>
          {/* Right Menu */}
          <div className='flex space-x-2'>
            <div className='flex gap-5 mr-8'>
              <Link
                to='/'
                className='flex flex-col items-center justify-center border-t-[5px]  border-primary'
              >
                <ImHome className='text-primary text-lg' />
                <span>Anasayfa</span>
              </Link>
              <Link
                to='/register'
                className='flex flex-col items-center justify-center border-t-[5px] border-white hover:border-primary duration-200'
              >
                <MdSettingsSystemDaydream className='text-primary text-lg' />
                <span>Günlük</span>
              </Link>
              <div className='flex flex-col items-center justify-center border-t-[5px] border-white hover:border-primary duration-200'>
                <BiBookReader className='text-primary text-lg' />
                <span>İletişim</span>
              </div>
            </div>
            <span className='w-8 border-l-8 border-b-8 border-background rotate-[45deg]'></span>
            <div className='flex items-center'>
              {!user ? (
                <div className='relative'>
                  <button
                    onClick={handleClickInside}
                    className='relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900'
                  >
                    <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                      Giriş Yap
                    </span>
                  </button>
                  {loginHandle && <Login />}
                </div>
              ) : (
                <Profile />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

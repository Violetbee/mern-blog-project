import { GiFoldedPaper } from 'react-icons/gi';
import { ImHome } from 'react-icons/im';
import { BiBookReader } from 'react-icons/bi';
import { MdSettingsSystemDaydream } from 'react-icons/md';
import { useAuthContext } from '../context/authContext';
import Profile from '../components/Profile';
import { useState } from 'react';
import Login from '../components/Login';
import { NavLink } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import { Transition } from '@tailwindui/react';

function Header() {
  const { user } = useAuthContext();
  const [loginHandle, setLoginHandle] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

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
          {/* Pc Right Menu */}
          <div className='hidden space-x-2 md:flex'>
            <div className='flex gap-5 mr-8 '>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? 'menuActive' : 'menuInActive'
                }
              >
                <ImHome className='text-primary text-lg' />
                <span>Anasayfa</span>
              </NavLink>

              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  isActive ? 'menuActive' : 'menuInActive'
                }
              >
                <BiBookReader className='text-primary text-lg' />
                <span>İletişim</span>
              </NavLink>
              {!user && (
                <NavLink
                  to='/register'
                  className={({ isActive }) =>
                    isActive ? 'menuActive' : 'menuInActive'
                  }
                >
                  <MdSettingsSystemDaydream className='text-primary text-lg' />
                  <span>Kayıt Ol</span>
                </NavLink>
              )}
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
          {/* Mobile Right Menu */}
          <div className='flex md:hidden justify-center items-center'>
            <GoThreeBars
              onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
              className='text-4xl cursor-pointer'
            />
            <Transition
              show={toggleMobileMenu}
              enter='transition-opacity duration-200'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='h-screen w-2/3 absolute right-0 top-0 bottom-0 bg-white border-l-2 opacity-100 flex justify-end'>
                <div className='h-14 flex items-center justify-center border-b-2 border-white mr-2'>
                  <GoThreeBars
                    onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
                    className='text-4xl cursor-pointer'
                  />
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

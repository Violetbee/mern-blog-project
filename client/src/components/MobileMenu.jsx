import { NavLink } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import { Transition } from '@tailwindui/react';
import { ImHome } from 'react-icons/im';
import { BiBookReader } from 'react-icons/bi';
import { useAuthContext } from '../context/authContext';
import { MdSettingsSystemDaydream } from 'react-icons/md';
import Profile from '../components/Profile';
import MobileLogin from './MobileLogin';

function MobileMenu({ toggleMobileMenu, setToggleMobileMenu }) {
  const { user } = useAuthContext();
  return (
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
        <div className='h-screen w-1/2 absolute right-0 top-0 bottom-0 bg-white border-l-2 opacity-100 flex flex-col'>
          <div className='h-14 flex self-end border-b-2 border-white mr-2'>
            <GoThreeBars
              onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
              className='text-4xl self-center cursor-pointer'
            />
          </div>
          <div className='flex-1'>
            <div className='h-full flex flex-col items-center gap-20'>
              {!user ? (
                <MobileLogin />
              ) : (
                <div className='rounded-md bottom-2 p-2 sm:p-3'>
                  <Profile />
                </div>
              )}
              <div className='flex flex-col'>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? 'menuMobileActive' : 'menuMobileInActive'
                  }
                >
                  <ImHome className='text-primary text-lg' />
                  <span>Anasayfa</span>
                </NavLink>
                <NavLink
                  to='/contact'
                  className={({ isActive }) =>
                    isActive ? 'menuMobileActive' : 'menuMobileInActive'
                  }
                >
                  <BiBookReader className='text-primary text-lg' />
                  <span>İletişim</span>
                </NavLink>
                {!user && (
                  <NavLink
                    to='/register'
                    className={({ isActive }) =>
                      isActive ? 'menuMobileActive' : 'menuMobileInActive'
                    }
                  >
                    <MdSettingsSystemDaydream className='text-primary text-lg' />
                    <span>Kayıt Ol</span>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}
export default MobileMenu;

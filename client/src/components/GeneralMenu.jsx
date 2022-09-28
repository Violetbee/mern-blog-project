import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import { BiBookReader } from 'react-icons/bi';
import { MdSettingsSystemDaydream } from 'react-icons/md';
import { ImHome } from 'react-icons/im';
import Profile from '../components/Profile';
import Login from '../components/Login';

function GeneralMenu({ handleClickInside, loginHandle }) {
  const { user } = useAuthContext();
  return (
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
  );
}
export default GeneralMenu;

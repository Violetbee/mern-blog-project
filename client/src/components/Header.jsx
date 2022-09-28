import { GiFoldedPaper } from 'react-icons/gi';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import GeneralMenu from './GeneralMenu';

function Header() {
  const [loginHandle, setLoginHandle] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const handleClickInside = () => {
    setLoginHandle(!loginHandle);
  };

  return (
    <div className='sticky z-10 top-0 h-14 bg-white w-full flex justify-center border-b-2'>
      <div className='w-[576px] md:w-[1080px]'>
        {/* NavBar */}
        <div className='h-full flex justify-between px-2'>
          {/* Logo */}
          <div className='flex items-center gap-2'>
            <GiFoldedPaper className='text-3xl text-primary' />
            <span className='text-2xl'>Blog Sayfam</span>
          </div>
          {/* Pc Right Menu */}
          <GeneralMenu
            handleClickInside={handleClickInside}
            loginHandle={loginHandle}
          />
          {/* Mobile Right Menu */}
          <MobileMenu
            toggleMobileMenu={toggleMobileMenu}
            setToggleMobileMenu={setToggleMobileMenu}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

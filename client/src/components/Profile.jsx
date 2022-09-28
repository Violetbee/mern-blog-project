import { logout } from '../axios';
import { useAuthContext } from '../context/authContext';

function Profile() {
  const { user, setUser } = useAuthContext();
  return (
    <div className='flex flex-col md:flex-row items-center gap-2'>
      <img
        className='rounded-full  w-16 h-16 md:w-10 md:h-10 object-cover'
        src={`api/users/uploads/${user.avatar.data}`}
        alt=''
      />
      <div className='flex flex-col'>
        <p>{user.fullName}</p>
        <button
          onClick={() => {
            logout();
            localStorage.removeItem('user');
            setUser(null);
          }}
          className='text-sm text-end'
        >
          Çıkış Yap
        </button>
      </div>
    </div>
  );
}
export default Profile;

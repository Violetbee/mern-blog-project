import { useAuthContext } from '../context/authContext';
import img3 from '../images/resim.jpg';

function Profile() {
  const { user, setUser } = useAuthContext();
  return (
    <div className='flex items-center gap-2'>
      <img className='rounded-full w-10' src={img3} alt='' />
      <div className='flex flex-col'>
        <p>{user.fullName}</p>
        <button
          onClick={() => {
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

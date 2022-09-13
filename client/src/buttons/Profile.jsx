import img3 from '../images/resim.jpg';

function Profile() {
  return (
    <div className='flex items-center gap-2'>
      <img className='rounded-full w-10' src={img3} alt='' />
      <p>Çağlar Karahüseyin</p>
    </div>
  );
}
export default Profile;

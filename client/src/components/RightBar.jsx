import { useAuthContext } from '../context/authContext';
import { useDesignContext } from '../context/designContext';

function RightBar() {
  const { setSharePost, sharePost } = useDesignContext();
  const { user } = useAuthContext();
  return (
    <div className='sticky z-0 top-16 duration-1000 w-2/12 h-16 space-y-2 '>
      {user && (
        <div
          onClick={() => setSharePost(!sharePost)}
          className='flex items-center justify-center border-[1px] p-2 rounded-md bg-pink text-white cursor-pointer'
        >
          Gönderi Paylaş
        </div>
      )}
      <div className='bg-white border-[1px] h-full rounded-md'></div>
    </div>
  );
}
export default RightBar;

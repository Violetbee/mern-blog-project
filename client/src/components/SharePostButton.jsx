import { useAuthContext } from '../context/authContext';
import { useDesignContext } from '../context/designContext';

function SharePost() {
  const { setSharePost, sharePost } = useDesignContext();
  const { user } = useAuthContext();
  return (
    <>
      {user && (
        <div
          onClick={() => setSharePost(!sharePost)}
          className='flex items-center justify-center border-[1px] p-2 rounded-md bg-pink text-white cursor-pointer'
        >
          Gönderi Paylaş
        </div>
      )}
    </>
  );
}
export default SharePost;

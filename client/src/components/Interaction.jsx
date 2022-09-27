import { useEffect } from 'react';
import { useState } from 'react';
import { likePost } from '../axios/index.js';
import { useAuthContext } from '../context/authContext';
import { AiFillHeart } from 'react-icons/ai';

function Interaction({ postId, likes }) {
  const [likeCounter, setLikeCounter] = useState(0);
  const { user, liked, setLiked } = useAuthContext();

  useEffect(() => {
    setLikeCounter(likes);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const likeHandler = () => {
    likePost({
      postId,
      userId: user?._id,
    })
      .then((res) => {
        if (res.data === 'okey') {
          setLikeCounter((prev) => prev + 1);
        } else {
          setLikeCounter((prev) => prev - 1);
          setLiked(false);
        }
      })
      .catch((e) => console.log(e.response.data));
  };
  return (
    <div className='flex items-center space-x-3'>
      <div className='flex items-center gap-1'>
        {liked ? <AiFillHeart color='red' /> : <AiFillHeart color='grey' />}
        {likeCounter}
      </div>
      <div
        onClick={likeHandler}
        className='px-2 py-1 border-[1px] cursor-pointer hover:bg-slate-600 hover:text-white duration-200'
      >
        Beğen
      </div>
    </div>
  );
}
export default Interaction;

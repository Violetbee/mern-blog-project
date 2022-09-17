import { useEffect } from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.png';

function Posts({ author, title, content, tags, date }) {
  return (
    <div className='bg-white border-[1px] rounded-md px-4 py-3 flex flex-col gap-2'>
      <div>
        <h1 className='text-xl'>· {title}</h1>
        <p>{content}</p>
      </div>
      <div className='self-end'>{author}</div>
    </div>
  );
}

export default Posts;

import { useEffect } from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.png';

function Posts() {
  useEffect(() => {}, []);
  return (
    <div className='bg-white border-[1px] rounded-md px-4 py-3 flex flex-col gap-2'>
      <div>
        <h1 className='text-xl'>· Örnek bir blog başlığı</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          architecto repellat in necessitatibus libero. Tempore assumenda
          laborum ratione in iure.
        </p>
      </div>
      <div className='grid grid-cols-2 gap-1'>
        <img className='border-[1px]' src={img1} alt='' />
        <img className='border-[1px]' src={img2} alt='' />
      </div>
    </div>
  );
}

export default Posts;

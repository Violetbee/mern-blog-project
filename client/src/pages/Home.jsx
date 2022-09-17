import React, { useState } from 'react';
import { useEffect } from 'react';
import { getPosts } from '../axios';
import Posts from '../components/Posts';
import { useAuthContext } from '../context/authContext';

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res.data))
      .catch((e) => {
        console.log(e);
      });
  }, [posts]);

  return (
    <div className='flex justify-center'>
      <div className=' w-[1064px] flex flex-row space-x-4'>
        <div className='sticky top-16 w-2/12 h-16 '>
          <div className='bg-white border-[1px] w-full h-full rounded-md'></div>
        </div>
        <div className='flex flex-col w-8/12 gap-2 h-'>
          {posts.map((post) => {
            return (
              <Posts
                key={post._id}
                author={post.authorName}
                title={post.title}
                content={post.content}
                tags={post.tags}
                date={post.createdAt}
              />
            );
          })}
        </div>
        <div className='sticky z-0 top-16 duration-1000 w-2/12 h-16'>
          <div className='bg-white border-[1px] w-full h-full rounded-md'></div>
        </div>
      </div>
    </div>
  );
}

export default Home;

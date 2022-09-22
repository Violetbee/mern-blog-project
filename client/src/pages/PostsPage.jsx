import Post from '../components/Post';
import { useEffect, useState } from 'react';
import { getPosts } from '../axios';

function PostsPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res.data))
      .catch((e) => {
        console.log(e);
      });
  }, [posts]);
  return (
    <>
      {posts.map((post) => {
        return (
          <Post
            key={post._id}
            author={post.authorName}
            title={post.title}
            content={post.content}
          />
        );
      })}
    </>
  );
}
export default PostsPage;

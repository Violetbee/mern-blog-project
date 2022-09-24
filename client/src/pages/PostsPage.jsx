import Post from '../components/Post';
import { useEffect, useState } from 'react';
import { getPosts } from '../axios';
import SendPost from '../components/SendPost';
import { useAuthContext } from '../context/authContext';

function PostsPage() {
  const [posts, setPosts] = useState([]);

  const { user } = useAuthContext();

  useEffect(() => {
    getPosts().then((res) => setPosts(res.data));
  }, []);

  return (
    <>
      {user && <SendPost />}
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

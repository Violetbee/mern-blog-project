import Post from '../components/Post';
import { useEffect, useState } from 'react';
import { getPosts } from '../axios';
import SendPost from '../components/SendPost';
import { useAuthContext } from '../context/authContext';

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState({});

  const { user } = useAuthContext();

  useEffect(() => {
    getPosts().then((res) => setPosts(res.data));
  }, [singlePost]);

  return (
    <>
      {user && (
        <SendPost
          setPosts={setPosts}
          posts={posts}
          setSinglePost={setSinglePost}
          singlePost={singlePost}
        />
      )}
      {posts.map((post) => {
        return (
          <Post
            key={post._id}
            author={post.authorName}
            username={post.username}
            title={post.title}
            content={post.content}
          />
        );
      })}
    </>
  );
}
export default PostsPage;

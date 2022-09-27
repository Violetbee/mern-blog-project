import Interaction from './Interaction';

function Posts({
  username,
  title,
  content,
  postId,
  authorId,
  likes,
  tags,
  date,
}) {
  return (
    <div className='contentBackground flex flex-col'>
      <div className='space-y-2'>
        <h1 className='text-xl'>· {title}</h1>
        <p>{content}</p>
      </div>
      <div className='flex justify-between'>
        <div>
          <Interaction postId={postId} authorId={authorId} likes={likes} />
        </div>
        <div>{username}</div>
      </div>
    </div>
  );
}

export default Posts;

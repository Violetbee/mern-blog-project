function Posts({ author, title, content, tags, date }) {
  return (
    <div className='contentBackground flex flex-col'>
      <div className='space-y-2'>
        <h1 className='text-xl'>· {title}</h1>
        <p>{content}</p>
      </div>
      <div className='self-end'>{author}</div>
    </div>
  );
}

export default Posts;

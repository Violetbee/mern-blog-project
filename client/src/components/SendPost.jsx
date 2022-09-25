import { useState } from 'react';
import { sendPost } from '../axios';
import { useAuthContext } from '../context/authContext';

function SendPost({ setSinglePost }) {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    authorId: user._id,
    authorName: user.fullName,
    username: user.username,
  });
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    setSinglePost(formData);
    sendPost(formData);
    setTimeout(() => {
      setLoading(false);
      setFormData({ ...formData, title: '', content: '' });
    }, 2000);
  };
  return (
    <div className='contentBackground'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input
          className='w-full p-2 border-2 rounded-lg'
          type='text'
          name='title'
          id='title'
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder='Başlık'
        />

        <textarea
          className='w-full p-2 border-2 rounded-lg'
          type=''
          name='title'
          id='title'
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          placeholder='Başlık'
        />
        <button
          className={`p-2 border-2 cursor-pointer  ${
            loading && 'cursor-not-allowed bg-green-500 text-white'
          }`}
          type='submit'
          disabled={loading}
        >
          {loading ? 'Başarıyla gönderildi' : 'Gönder'}
        </button>
      </form>
    </div>
  );
}
export default SendPost;

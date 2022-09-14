import { useState } from 'react';
import { login } from '../axios';
import { useAuthContext } from '../context/authContext';

function Auth() {
  const { user, setUser } = useAuthContext();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const handleForm = (e) => {
    e.preventDefault();
    console.log(formData);
    login(formData)
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => {
        console.log(e.response.data.msg);
      });
  };
  return (
    <div className='absolute top-14 right-0'>
      <div className='w-52 bg-white shadow-md p-4 rounded'>
        <form onSubmit={handleForm}>
          <label htmlFor='username'>Kullanıcı Adı</label>
          <input
            type='text'
            className='w-full rounded border-2 p-1 focus:outline-none'
            id='username'
            value={formData?.username}
            onChange={(e) => {
              setFormData({ ...formData, username: e.target.value });
            }}
          />
          <label htmlFor='password'>Şifre</label>
          <input
            type='password'
            className='w-full rounded border-2 p-1 focus:outline-none'
            id='password'
            value={formData?.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <button className='p-2 w-full border-2 mt-2' type='submit'>
            Beni içeri al
          </button>
        </form>
      </div>
    </div>
  );
}
export default Auth;

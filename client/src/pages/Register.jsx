import { useState } from 'react';
import { signUp } from '../axios/index';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onChangeFile = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('fullName', fullName);
    formData.append('password', password);
    formData.append('phoneNumber', phoneNumber);
    formData.append('image', image);
    signUp(formData).then((res) => {
      console.log(res.data);
    });
    setLoading(!loading);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div className='contentBackground'>
      <form
        onSubmit={onSubmitHandler}
        encType='multipart/form-data'
        className='flex flex-col gap-2'
      >
        <div className='flex flex-col gap-1'>
          <label htmlFor='fullName'>İsim ve Soyisim*</label>
          <input
            type='text'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            id='fullName'
            placeholder='Lütfen isim ve soyisminizi giriniz'
            className='w-full p-2 border-2 rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='username'>Kullanıcı Adı*</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id='username'
            placeholder='Lütfen kullanıcı adınızı giriniz'
            className='w-full p-2 border-2 rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email'>E-mail*</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            placeholder='Lütfen mail adresinizi giriniz'
            className='w-full p-2 border-2 rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='password'>Şifre*</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id='password'
            placeholder='Lütfen şifrenizi giriniz'
            className='w-full p-2 border-2 rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='phoneNumber'>Telefon Numarası</label>
          <input
            type='tel'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            id='phoneNumber'
            className='w-full p-2 border-2 rounded-lg'
            maxLength='11'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='image'>Profil Resmi</label>
          <input
            onChange={onChangeFile}
            type='file'
            id='image'
            className='w-full p-2 border-2 rounded-lg'
          />
        </div>

        <input
          className={`p-2 border-2 cursor-pointer  ${
            loading && 'cursor-not-allowed bg-green-500 text-white'
          }`}
          disabled={loading}
          value={loading ? 'Üyelik Başarılı' : 'Üye Ol'}
          type='submit'
        />
      </form>
    </div>
  );
}
export default Register;

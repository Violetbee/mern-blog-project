import { useState } from 'react';

function Register() {
  const [inputItem, setInputItem] = useState({});
  const handleForm = () => {};
  return (
    <div className='contentBackground'>
      <form onSubmit={handleForm} className='flex flex-col gap-2'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='fullName'>İsim ve Soyisim</label>
          <input
            type='text'
            value={inputItem.fullName}
            id='fullName'
            placeholder='Lütfen isim ve soyisminizi giriniz'
            className='w-full p-2 border-2 rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='fullName'>Kullanıcı Adı</label>
          <input
            type='text'
            value={inputItem.fullName}
            id='fullName'
            placeholder='Lütfen isim ve soyisminizi giriniz'
            className='w-full p-2 border-2 rounded-lg'
          />
        </div>
      </form>
    </div>
  );
}
export default Register;

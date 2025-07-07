import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getSafeLocalStorageData from './utils/getSafeLocalStorageData';

export default function Login() {
  const [email, setEmail] = useState('');
  const [sifre, setSifre] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.loggedInUser) {
      navigate('/'); // kullanıcı giriş yapmışsa anasayfaya yönlendir
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = getSafeLocalStorageData();

    if (data && data.email === email && data.sifre === sifre) {
      localStorage.loggedInUser = JSON.stringify(data);
      navigate('/'); // giriş başarılıysa anasayfaya yönlendir
    } else {
      alert('E-posta veya şifre hatalı!');
    }
  };

  return (
    <form className='login-form' onSubmit={handleSubmit} autoComplete='off'>
      <div>
        <label>
          E-posta:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Şifre:
          <input type="password" value={sifre} onChange={e => setSifre(e.target.value)} required />
        </label>
      </div>
      <button type="submit" className='fixBtn'>Giriş Yap</button>
    </form>
  );
}

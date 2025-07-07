import { useNavigate } from 'react-router-dom';
import getSafeLocalStorageData from './utils/getSafeLocalStorageData';

export default function Register({ onSwitch }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData);

    const existingData = getSafeLocalStorageData();
    if (existingData && existingData.email === formObj.email) {
      alert('Bu e-posta adresi ile zaten bir hesap var!');
      return;
    }

    localStorage.data = JSON.stringify(formObj);
    alert('Kayıt Başarılı!');
    navigate('/giris');
    e.target.reset();
  };

  return (
    <form className='register-form' onSubmit={handleSubmit} autoComplete='off'>
      <div>
        <label>
          Adı:
          <input type="text" name="ad" required />
        </label>
      </div>
      <div>
        <label>
          Soyad:
          <input type="text" name="soyad" required />
        </label>
      </div>
      <div>
        <label>
          E-posta:
          <input type="email" name="email" required />
        </label>
      </div>
      <div>
        <label>
          Şifre:
          <input type="password" name="sifre" required />
        </label>
      </div>
      <div>
        <label>
          Cinsiyet:
          <select name="cinsiyet" required>
            <option value="">Seçiniz</option>
            <option value="kadin">Kadın</option>
            <option value="erkek">Erkek</option>
            <option value="diger">Diğer</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Bölüm:
          <select name="bolum" required>
            <option value="">Seçiniz</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="mobil">Mobil</option>
          </select>
        </label>
      </div>
      <div className='switch-link'>
        <button type="submit" className='fixBtn'>Kayıt Ol</button>
        <span>
          Hesabın var mı?{' '}
          <a href="#" onClick={e => { e.preventDefault(); onSwitch(); }}>Giriş Yap</a>
        </span>
      </div>
    </form>
  );
}

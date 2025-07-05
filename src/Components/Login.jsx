export default function Login({ onSwitch, onLogin, getData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const sifre = formData.get('sifre');
    const data = getData;

    if (data && data.email === email && data.sifre === sifre) {
      onLogin(data);
    } else {
      alert('E-posta veya şfire hatalı!');
    }
    e.target.reset();
  }
  return (
    <form className='login-form' onSubmit={handleSubmit} autoComplete='off'>
      <div>
        <label>
          E-posta: 
          <input type="email" name='email' required />
        </label>
      </div>
      <div>
        <label>
          Şifre: 
          <input type="password" name='sifre' required />
        </label>
      </div>
      <div className='switch-link'>
        <button type='submit'>Giriş Yap</button>
        <span>
          Hesabın yok mu?{' '}
          <a href="#" onClick={e => { e.preventDefault(); onSwitch(); }}>Kayıt Ol</a>
        </span>
      </div>
    </form>
  )
}


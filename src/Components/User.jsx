import { useState } from 'react';
import Login from './Login';
import Register from './Register';
function getSafeLocalStorageData() {
  let data = null;

  try {
    data = localStorage.data ? JSON.parse(localStorage.data) : null;
    // LS'da 'data' varsa onu JSON.parse ile nesneye çeviriyor yoksa null olarak bırakıyor
  } catch (e) {
    // Eğer JSON.parse sırasında bir hata olursa (bozuk veri olması vb...);
    localStorage.removeItem('data');
    // LS'dan data anahtarını siler

    // localStorage.clear() -> tüm LS'daki verileri siler
    // LS'dan tüm verileri siler
    data = null;
  }
  return data;
}
export default function User({ user, setUser, showLogin, setShowLogin }) {

  const handleLogout = () => {
    setUser(null);
    setShowLogin(true);
  }
  console.log("user : " + user);
  return (
    <>
      {user ? (
        <div className='welcome-message'>
          <h2>Hoşgeldin {user.ad} {user.soyad}</h2>
          <p><strong>E-posta: </strong>{user.email}</p>
          <p><strong>Bölüm: </strong>{user.bolum}</p>
          <button onClick={handleLogout}>Çıkış Yap</button>
        </div>
      ) : showLogin ? (
        <Login onSwitch={() => setShowLogin(false)} onLogin={setUser} getData={getSafeLocalStorageData()} />
      ) : ( 
        <Register onSwitch={() => setShowLogin(true)} getData={getSafeLocalStorageData()} />
      )}
    </>
  )
}


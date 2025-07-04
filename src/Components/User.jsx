import { useState } from 'react';
import Login from './Login';
import Register from './Register';


export default function User() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  const handleLogout = () => {
    setUser(null);
    setShowLogin(true);
  }

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
        <Login onSwitch={() => setShowLogin(false)} onLogin={setUser} />
      ) : ( 
        <Register onSwitch={() => setShowLogin(true)} />
      )}
    </>
  )
}


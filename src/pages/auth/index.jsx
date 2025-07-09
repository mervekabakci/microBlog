import { useState } from 'react';
import Login from './Login';
import Register from './Register';

export default function AuthPage({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  return showLogin ? (
    <Login onSwitch={() => setShowLogin(false)} onLogin={onLogin} />
  ) : (
    <Register onSwitch={() => setShowLogin(true)} />
  );
}
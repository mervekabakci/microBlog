import { useEffect, useState } from 'react';
import Card from './Components/Card'
import Footer from './Components/Footer'
import Header from './Components/Header'
import User from './Components/User'
import BannerSlider from './Components/BannerSlider';
import BlogDetails from './Components/BlogDetails';


export default function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSwitchLogin = () => setShowLogin(true);
  const handleSwitchRegister = () => setShowLogin(false);
  const handleShowHome = () => setShowLogin(null);

  console.log("show : " + showLogin)
  console.log("set show : " + setShowLogin)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <div className='main'>
        <Header
          user={user}
          setUser={setUser}
          onSwitchRegister={handleSwitchRegister}
          onSwitchLogin={handleSwitchLogin}
          onSwitchHome={handleShowHome}
          darkMode={darkMode}
          setDarkMode={setDarkMode} />
        <div className="center">
          <div className="container-md">
            <BlogDetails />
            {showLogin === null ? (
              <>
                <div className="bannerWrapper homeBannerWrapper">
                  <BannerSlider />
                </div>
                <Card />
              </>
            ) : (
              <User
                user={user}
                setUser={(data) => {
                  setUser(data);
                  setShowLogin(null);
                }}
                showLogin={showLogin}
                setShowLogin={setShowLogin}
              />

            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
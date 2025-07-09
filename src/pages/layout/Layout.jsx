import { useEffect, useState } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

export default function Layout({ children }) {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [shiningMode, setShiningMode] = useState(false);

    useEffect(() => {
        if (shiningMode) {
            document.body.classList.add("mid-light");
        } else {
            document.body.classList.remove("mid-light");
        }
    }, [shiningMode]);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('loggedInUser'); 
        setShowLogin(true);
    }
    
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("theme-dark");
        } else {
            document.body.classList.remove("theme-dark");
        }
    }, [darkMode]);

    useEffect(() => {
        if (localStorage.loggedInUser) {
            try {
                const savedUser = JSON.parse(localStorage.loggedInUser);
                setUser(savedUser);
            } catch (err) {
                localStorage.removeItem('loggedInUser');
            }
        }
    }, []);

    const handleSwitchLogin = () => setShowLogin(true);
    const handleSwitchRegister = () => setShowLogin(false);
    const handleShowHome = () => setShowLogin(null);

    return (
        <div className="main">
            <Header
                user={user}
                onSwitchRegister={handleSwitchRegister}
                onSwitchLogin={handleSwitchLogin}
                onSwitchHome={handleShowHome}
                showLogin={showLogin}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                setShiningMode ={setShiningMode}
                handleLogout ={handleLogout}
            />
            <div className="center">{children}</div>
            <Footer />
        </div>
    )
}
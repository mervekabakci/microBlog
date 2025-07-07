import { useEffect, useState } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

export default function Layout({ children }) {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(true);
    const [isLoading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [shiningMode, setShiningMode] = useState(false);
    // const [userData, setUserData] = useState({ users: [] });

    useEffect(() => {
        if (shiningMode) {
            document.body.classList.add("mid-light");
        } else {
            document.body.classList.remove("mid-light");
        }
    }, [shiningMode]);


    
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("theme-dark");
        } else {
            document.body.classList.remove("theme-dark");
        }
    }, [darkMode]);

    // useEffect(() => {
    //     fetch('https://blog.muratakdemir.tr/swagger/v1/swagger.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setUser(data.path.post || []);
    //             setLoading(false);
    //         })
    //         .catch(() => setLoading(false));
    // }, []);

    console.log('data :' + user);

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
                setShowLogin={setShowLogin}
                setDarkMode={setDarkMode}
                darkMode={darkMode}
                setShiningMode={setShiningMode}
                shiningMode={shiningMode}
            />
            <div className="center">{children}</div>
            <Footer />
        </div>
    )
}
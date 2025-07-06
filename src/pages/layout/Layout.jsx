import { useEffect, useState } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

export default function Layout( {children }) {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(true);

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
            />
            <div className="center">{children}</div>
            <Footer />
        </div>
    )
}
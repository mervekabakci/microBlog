import Layout from '../layout/layout';
import Login from "../auth/Login";
import Register from "../auth/Register";
import Home from "../home/Home";
import { Link } from 'react-router-dom';

export default function Header({ user, onSwitchLogin, onSwitchRegister, onSwitchHome, showLogin, setShowLogin }) {
    const handleClickOpenMenu = (e) => {
        const centerContent = document.querySelector(".center");
        const navbarContent = document.querySelector(".navbar");
        e.target.classList.toggle("active");
        navbarContent.classList.toggle("opened");
        centerContent.classList.toggle("openedMenu");
    }

    return (
        <>
            <header>
                <div className="container-md header">
                    <Link className="navBrands" to="/">MicroBlog</Link>
                    <div className="otherButtons d-md-none">
                        {user ? <a href="#" className="userButton"><span className="icon-user"></span></a>
                            : ""
                        }                     
                        <a href="#" className="navToggler" onClick={handleClickOpenMenu}>
                            <span className="line"></span>
                        </a>
                    </div>
                    <div className="navbar">
                        <div className="searchColumn">
                            <form>
                                <input type="text" name="searchBlog" className="searchBlog" id="searchBlog" placeholder="Blog..." />
                                <button className="searchButton"><span className="icon-search"></span></button>
                            </form>
                        </div>
                        <ul className="nav">
                            <li className="navItem"><a href="#" className="navLink">Anasayfa</a></li>
                            <li className="navItem"><a href="#" className="navLink">Blog</a></li>
                            <li className="navItem"><a href="#" className="navLink">İletişim</a></li>
                        </ul>
                        {user ? <Link className="userButton d-none d-md-flex" path="/giris"><span className="icon-user"></span></Link>
                            : (
                                <div className="buttons">
                                    <Link className="fixBtn button-primary" to="/giris">Giriş Yap</Link>
                                    <Link className="fixBtn button-secondary" to="/kayit">Kayıt Ol</Link>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </header>
        </>
    )

    
}
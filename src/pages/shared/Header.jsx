import Layout from '../layout/layout';
import Login from "../auth/Login";
import Register from "../auth/Register";
import Home from "../home/Home";
import { Link } from 'react-router-dom';

export default function Header({ user, darkMode,setDarkMode, shiningMode, setShiningMode}) {


    const toggleTheme = () => {
        setDarkMode(prev => !prev);
    };

    const toggleShining = () => {
        setShiningMode(prev => !prev);
    };

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
                            <li className="navItem"><Link to="/" className="navLink">Anasayfa</Link></li>
                            <li className="navItem"><Link to="/blog" className="navLink">Blog</Link></li>
                        </ul>
                        <div className="buttons">
                            {user ?
                                <Link className="userButton d-none d-md-flex" to="/giris"><span className="icon-user"></span></Link>
                                : (
                                    <>
                                        <Link className="fixBtn button-primary" to="/giris">Giriş Yap</Link>
                                        <Link className="fixBtn button-secondary" to="/kayit">Kayıt Ol</Link>
                                    </>
                                )
                            }

                            <button className={`themeBtn ${!darkMode ? 'darkMode' : ''}`}
                                onClick={() => setDarkMode(prev => !prev)}
                                onContextMenu={(e) => {
                                    e.preventDefault();
                                    setShiningMode(prev => !prev) }
                                }
                                >
                                {darkMode ? <span className="icon-light-mode"></span> : <span className="icon-dark-mode"></span>}
                            </button>
                        </div>


                    </div>
                </div>
            </header>
        </>
    )


}
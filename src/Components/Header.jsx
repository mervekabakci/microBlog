export default function Header({ user, onSwitchLogin, onSwitchRegister, onSwitchHome }) {
    const handleClickOpenMenu = (e) => {
        const centerContent = document.querySelector(".center");
        const navbarContent = document.querySelector(".navbar");
        e.target.classList.toggle("active");
        navbarContent.classList.toggle("opened");
        centerContent.classList.toggle("openedMenu");
        body.classList.toggle("overflow-hidden");
    }

    return (
        <>
            <header>
                <div className="container-md header">
                    <a className="navBrands" href="/"  onClick={e => { e.preventDefault(); onSwitchHome(); }}>MicroBlog</a>
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
                        {user ? <a href="#" className="userButton"><span className="icon-user"></span></a>
                            : (
                                <div className="buttons">
                                    <a href="#" onClick={e => { e.preventDefault(); onSwitchLogin(); }} className="fixBtn button-primary">Giriş Yap</a>
                                    <a href="#" onClick={e => {e.preventDefault(); onSwitchRegister(); }} className="fixBtn button-secondary">Kayıt Ol</a>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </header>
        </>
    )

    
}
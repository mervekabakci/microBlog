export default function Header() {


    return (
        <>
            <header>
                <div className="container header">
                    <a href="/">Logo</a>
                    <div className="navbar">
                        <div className="searchColumn">
                            <form>
                                <input type="text" className="searchBlog" id="searchBlog" />
                                <button className="fixBtn">Ara</button>
                            </form>
                        </div>
                        <ul className="nav">
                            <li className="navItem"><a href="#" className="navLink">Anasayfa</a></li>
                            <li className="navItem"><a href="#" className="navLink">Blog</a></li>
                            <li className="navItem"><a href="#" className="navLink">İletişim</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )

    
}
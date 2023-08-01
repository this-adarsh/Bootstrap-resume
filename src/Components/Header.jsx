import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect } from 'react'
function Header() {
    const location = useLocation()
    useEffect(() => {
        let navbarText = document.getElementById('navbarText')
        if(navbarText.classList.contains("show")) navbarText.classList.remove('show')
    }, [location])
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >Adarsh Shukla's Blog</Link>
                <button className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                        <li className="nav-item">
                            <NavLink to="/" activeclassname='active' className="nav-link" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/posts" activeclassname='active' className="nav-link" >Posts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/page/about-me" activeclassname='active' className="nav-link" >About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Header;
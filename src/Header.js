import React from 'react';
import { Link, useLocation } from "react-router-dom";


const Header = () => {

        const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand" href="">SRK</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                        </li>
                        <li className="nav-item mx-2 dropdown">
                            <span className={`nav-link dropdown-toggle`} href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</span>
                            {/* <span className={`nav-link dropdown-toggle ${location.pathname === '/content' || location.pathname === '/calculator' ? 'active' : ''}`} href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</span> */}
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link to="/content" className={`dropdown-item ${location.pathname === '/content' ? 'active' : ''}`}>Content</Link>
                                </li>
                                <li>
                                    {/* <Link to="/calculator" className={`dropdown-item`}>Calculator</Link> */}
                                    <Link to="/calculator" className={`dropdown-item ${location.pathname === '/calculator' ? 'active' : ''}`}>Calculator</Link>
                                </li>
                                <li><span className="dropdown-item" href="">Another action</span></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><span className="dropdown-item" href="">Something else here</span></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 profile-menu">
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-user"></i>
                            </span>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li><span className="dropdown-item" href=""><i className="fas fa-sliders-h fa-fw"></i>Content</span></li>
                                <li><span className="dropdown-item" href=""><i className="fas fa-cog fa-fw"></i> Settings</span></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><span className="dropdown-item" href=""><i className="fas fa-sign-out-alt fa-fw"></i> Log Out</span></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

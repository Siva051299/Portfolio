import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidenav = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSidebarClosed, setIsSidebarClosed] = useState(false);

    const handleModeSwitch = () => {
        setIsDarkMode(!isDarkMode);
        // document.getElementsByClassName("sidebar")[0].classList.toggle("dark");
        document.getElementsByTagName("body")[0].classList.toggle("dark");
    };

    const handleToggle = () => {
        setIsSidebarClosed(!isSidebarClosed);
    };

    const handleSearchBtn = () => {
        setIsSidebarClosed(false);
    };

    const location = useLocation();

    return (
        <nav className={`sidebar ${isSidebarClosed ? "close" : ""} ${isDarkMode ? "dark" : ""}`}>
            <header>
                <div className="image-text justify-content-center my-3">
                    {/* <span className="image">
                        <img src="https://t4.ftcdn.net/jpg/04/06/91/91/240_F_406919147_D3WsGjwXj1qmFNrei2ZFvBWwiueRcFmg.jpg" alt="logo" />
                    </span> */}
                    <div className="text header-text">
                        <span className="main">Sivarama</span>
                        <span className="sub">Krishnan</span>
                    </div>
                </div>
                <i className={`bx bx-chevron-right toggle ${isSidebarClosed ? "close" : ""}`} onClick={handleToggle}></i>
            </header>

            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-links p-0">
                        <li className="search-bar" onClick={handleSearchBtn}>
                            <i className="bx bx-search icons"></i>
                            <input type="search" placeholder="Search..." />
                        </li>
                        <li className={`nav-link ${location.pathname === '/portfolio' ? 'activate' : ''}`}>
                            <Link to="/portfolio" >
                            <i className="bx bx-home-alt icons"></i>
                                <span className="text nav-text">Portfolio</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link>
                                <i className="bx bx-bar-chart-alt-2 icons"></i>
                                <span className="text nav-text">Revenue</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link>
                                <i className="bx bx-bell icons"></i>
                                <span className="text nav-text">Notifications</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link>
                                <i className="bx bx-pie-chart-alt icons"></i>
                                <span className="text nav-text">Analytics</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link>
                                <i className="bx bx-heart icons"></i>
                                <span className="text nav-text">Likes</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link>
                                <i className="bx bx-wallet-alt icons"></i>
                                <span className="text nav-text">Wallets</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="bottom-content">
                    <li className="nav-link">
                        <Link>
                            <i className="bx bx-log-out icons"></i>
                            <span className="text nav-text">Log Out</span>
                        </Link>
                    </li>
                    <li className="mode">
                        <div className="moon-sun">
                            <i className={`bx bx-moon icons moon ${isDarkMode ? "active" : ""}`}></i>
                            <i className={`bx bx-sun icons sun ${!isDarkMode ? "active" : ""}`}></i>
                        </div>
                        <span className="mode-text text">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                        {/* <div className="toggle-switch"> */}
                        <div className="toggle-switch" onClick={handleModeSwitch}>
                            <span className="switch"></span>
                            {/* <span className={`switch ${isDarkMode ? "dark" : ""}`}></span> */}
                        </div>
                    </li>
                </div>
            </div>
        </nav>
    );
};

export default Sidenav;

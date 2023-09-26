import React, { useState } from 'react';
import { Link } from "wouter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import './Navbar.scss';

function Navbar({activeBar}) {
    const [navbarShown, setNavbarShown] = useState(window.screen.width > 991.98 ? true : false)
    const [dropdownShown, setDropdownShown] = useState(false)


    return (
        <div className="Navbar container p-0" onMouseLeave={() => setNavbarShown(window.screen.width > 991.98 ? true : false)} >
            <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
                <span className="navbar-brand d-block d-lg-none">Navigation</span>
                <button
                    type="button"
                    className="navbar-toggler"
                    onMouseEnter={() => setNavbarShown(true)}
                >
                    <FontAwesomeIcon icon={solid("bars")} style={{color: "#9aa0ab"}} size="xl"/>
                </button>
                { navbarShown && <div className="navbar-collapse justify-content-between">
                    <div className="navbar-nav m-auto">
                        <Link href='/' className={`nav-item nav-link text-start ${activeBar === 0 ? 'active' : ''}`}>Home</Link>
                        <Link href='/about' className={`nav-item nav-link text-start ${activeBar === 1 ? 'active' : ''}`}>About</Link>
                        <div className="nav-item dropdown" onMouseLeave={() => setDropdownShown(false)}>
                            <button className="nav-link dropdown-toggle" onMouseEnter={() => setDropdownShown(true)} >Pages</button>
                            {<div className={`dropdown-menu ${dropdownShown ? "show" : ""}`}>
                                <Link href='/blog' className="dropdown-item text-start">Blog Grid</Link>
                                <Link href='/' className="dropdown-item text-start">Blog Detail</Link>
                            </div>}
                        </div>
                        <Link href='/contact' className={`nav-item nav-link text-start ${activeBar === 2 ? 'active' : ''}`}>Contact</Link>
                    </div>
                </div>}
            </nav>
        </div>
    );
}

export default Navbar;

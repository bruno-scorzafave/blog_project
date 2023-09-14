import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import './Navbar.scss';

function Navbar() {
    const [navbarShown, setNavbarShown] = useState(false);
    const [dropdownShown, setDropdownShown] = useState(false);

    return (
        <div className="Navbar container p-0" onMouseLeave={() => setNavbarShown(false)} >
            <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
                <a href="" className="navbar-brand d-block d-lg-none">Navigation</a>
                <button
                    type="button"
                    className="navbar-toggler"
                    onMouseEnter={() => setNavbarShown(true)}
                >
                    <FontAwesomeIcon icon={solid("bars")} style={{color: "#9aa0ab"}} size="xl"/>
                </button>
                { navbarShown && <div className="navbar-collapse justify-content-between">
                    <div className="navbar-nav m-auto">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <div className="nav-item dropdown" onMouseLeave={() => setDropdownShown(false)}>
                            <a href="#" className="nav-link dropdown-toggle" onMouseEnter={() => setDropdownShown(true)} >Pages</a>
                            {<div className={`dropdown-menu ${dropdownShown ? "show" : ""}`}>
                                <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                <a href="single.html" className="dropdown-item">Blog Detail</a>
                            </div>}
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                </div>}
            </nav>
        </div>
    );
}

export default Navbar;
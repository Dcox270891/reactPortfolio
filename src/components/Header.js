import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
    return(<header className="container">     
        <div className="top-bar border-under">
            <div className="main-heading heading-text">
                <h1>Daniel Cox</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li className="top-link main-text">
                        <Link to="/">About</Link>
                    </li>
                    <li className="top-link main-text" >
                        <Link to="/portolio">Portfolio</Link>
                    </li>
                    <li className="top-link main-text">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>);
};

export default Header;
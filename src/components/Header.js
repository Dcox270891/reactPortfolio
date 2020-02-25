import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
    return(<header class="container">     
        <div class="top-bar border-under">
            <div class="main-heading heading-text">
                <h1>Daniel Cox</h1>
            </div>
            <nav class="nav">
                <ul>
                    <li class="top-link main-text">
                        <Link to="/">About</Link>
                    </li>
                    <li class="top-link main-text" >
                        <Link to="/portolio">Portfolio</Link>
                    </li>
                    <li class="top-link main-text">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>);
};

export default Header;
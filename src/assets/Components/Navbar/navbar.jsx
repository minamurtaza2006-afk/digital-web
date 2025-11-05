import React from "react";

import './navbar.css'
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
// import impact from '../../Components/Images/impact-img1.png'
import digital from '../../Components/Images/the-digital-impacts.png.png'
const Navbar = () => {
    return (
        <nav>
            <ul className="navbar">
                <img className="impact-img" src={digital} alt="Impact" />
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <button className="contact-but">Contact Us</button>
            </ul>
            
        </nav>
    );
};

export default Navbar;

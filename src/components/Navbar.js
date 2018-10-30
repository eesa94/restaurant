import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navigation text-center d-none d-lg-flex flex-column align-items-center justify-content-between">
            <div>
                <a href="/" className="brand kodchasan-7 text-uppercase">Seoul Food.</a>
                <p className="brand-tagline text-right font-italic kodchasan-5">Taste Korea</p>
                <div className="underline"></div>
            </div>
            <ul className="link-list">
                <li><Link to="/" className="link">Home</Link></li>
                <li><NavLink to="/about" className="link">About</NavLink></li>
                <li><NavLink to="/menu" className="link">Menu</NavLink></li>
                <li><NavLink to="/contact" className="link">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar)
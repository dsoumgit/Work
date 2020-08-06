import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
// special react component
import logo from '../../assets/crown.svg';

const Header = () => {

    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <img src={logo} alt="Site Logo" className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                    </Link>
                <Link to="/contact" className="option">
                    CONTACT
                    </Link>
            </div>
        </div>
    )
}

export default Header;
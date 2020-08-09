import React from 'react';
import './header.style.scss';
import { NavLink, Link } from 'react-router-dom';
// special react component
import logo from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';

const Header = ({ user }) => {
console.log(user);
    return (
        <div className="header">
            <NavLink to="/" className="logo-container">
                <img src={logo} alt="Site Logo" className="logo" />
            </NavLink>
            <div className="options">
                <NavLink to="/shop" activeClassName="active" className="option">
                    SHOP
                </NavLink>
                <NavLink to="/contact" activeClassName="active" className="option">
                    CONTACT
                </NavLink>
                {
                    user ? 
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                    :
                    <NavLink to="/signin" activeClassName="active" className="option">SIGN IN</NavLink>
                }
            </div>
        </div>
    )
}

export default Header;
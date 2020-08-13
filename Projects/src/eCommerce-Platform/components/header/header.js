import React from 'react';
import './header.style.scss';
import { NavLink, Link } from 'react-router-dom';
// special react component
import logo from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
    
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
                    currentUser ? 
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

// redux connect 
const mapToStateProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapToStateProps)(Header);
import React from 'react';
import './header.style.scss';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { NavLink, Link } from 'react-router-dom';
// special react component
import logo from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';

const Header = ({ currentUser, hidden }) => {

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

                <CartIcon />
            </div>
            {
                hidden ? null
                :
                <CartDropdown />
            }
        </div>
    )
}

// destructing the state. Nested values
const mapToStateProps = ({ user: { currentUser} , cart: { hidden } }) => ({
    currentUser,
    hidden
});

export default connect(mapToStateProps)(Header);
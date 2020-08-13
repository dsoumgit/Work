import React from 'react';
import './cart-icon.style.scss';
// svg
import cartIcon from "../../assets/shopping-bag.svg";

import { connect } from 'react-redux';
// import action 
import { toggleCartHidden } from '../../redux/cart/cart-action';

const CartIcon = ({ toggleCartHidden }) => {

    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <img src={cartIcon} alt="Shopping bag" className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

// bind the action to the cart icon
const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

            // passing null as a default 
export default connect(null, mapDispatchToProps)(CartIcon);
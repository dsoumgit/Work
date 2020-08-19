import React from 'react';
import './cart-icon.style.scss';
// svg
import cartIcon from "../../assets/shopping-bag.svg";

import { connect } from 'react-redux';
// import action 
import { toggleCartHidden } from '../../redux/cart/cart-action';
import { selectCartItemsCount } from '../../redux/cart/cart-selector';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <img src={cartIcon} alt="Shopping bag" className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

// bind the action to the cart icon
const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

// bind the state 
// const mapStateToProps = state => {
//     return {
//         itemCount: selectCartItemsCount(state)
//     }
// }

// using 'reselect'
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

            // passing null as a default 
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
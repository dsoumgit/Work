import React from 'react';
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart-action';

const CartDropdown = ({ cartItems, history, dispatch, toggleCart }) => {

    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? 
                    (
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} /> )
                    )
                    :
                    (
                        <span className="empty-message">Your cart is empty.</span>
                    )
                }
            </div>

            <CustomButton onClick={ () => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT </CustomButton>
        </div>
    )
}

                // destructing cart items from state 
// const mapStateToProps = state => (
//     { cartItems: selectCartItems(state) }
// )

// using 'reselect'
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => {
    return{
        toggleCart: () => dispatch(toggleCartHidden())
    }
}

        // withRouter high order component, we can have access to the history 
export default withRouter(connect(mapStateToProps)(CartDropdown));
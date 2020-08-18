import React from 'react';
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selector';

const CartDropdown = ({ cartItems }) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => 
                        <CartItem key={cartItem.id} item={cartItem} />
                    )
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

                // destructing cart items from state 
const mapStateToProps = state => (
    { cartItems: selectCartItems(state) }
) 

export default connect(mapStateToProps)(CartDropdown);
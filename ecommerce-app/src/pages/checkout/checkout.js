import React from 'react';
import './checkout.style.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, totalCartItems } from '../../redux/cart/cart-selector';

const CheckoutPage = ({ cartItems, totalPrice }) => {
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => (
                    <CheckoutItem key={item.id} cartItem={item} />
                ))
            }
            <div className="total">
                <span>TOTAL: ${totalPrice}</span>
            </div>
        </div>
    )
}

const mapToStateProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: totalCartItems
});

export default connect(mapToStateProps)(CheckoutPage);
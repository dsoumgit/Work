import React from 'react';
import './checkout.style.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, totalCartItems } from '../../redux/cart/cart-selector';
import StripeButton from '../../components/stripe-button/stripe-button';

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
                <div>TOTAL: ${totalPrice}</div>
                <div><StripeButton price={totalPrice} /></div>
            </div>

            
            <div className="test-warning">
                *Please use the following test credit card for payments:
                <br />
                4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
            </div>
            
        </div>
    )
}

const mapToStateProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: totalCartItems
});

export default connect(mapToStateProps)(CheckoutPage);
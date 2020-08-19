import React from 'react';
import './checkout-item.style.scss';

import { connect } from 'react-redux';
import { clearCartItem, addItem, removeCartItem } from '../../redux/cart/cart-action';

const CheckoutItem = ({ cartItem, clearItemCart, addItemToCart, removeItemToCart}) => {
    // destructing 
    const { imageUrl, name, quantity, price } = cartItem;
    
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="Item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItemToCart(cartItem)}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItemToCart(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => clearItemCart(cartItem)}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => (
    {
        clearItemCart: item => dispatch(clearCartItem(item)),
        addItemToCart: item => dispatch(addItem(item)),
        removeItemToCart: item => dispatch(removeCartItem(item))
    }
)

export default connect(null, mapDispatchToProps)(CheckoutItem);
/**
 * This component is the cart item for each item when clicking on the cart icon. 
 */

 import React from 'react';
 import './cart-item.style.scss';

    // destructing from an item using nested destructing method
 const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
     
     return(
         <div className="cart-item">
             <img src={imageUrl} alt="item" />
             <div className="item-details">
                 <span className="name">{name}</span>
                 <span className="price">
                     {quantity} x {price}
                 </span>
             </div>
         </div>
     )
 }

 export default CartItem;
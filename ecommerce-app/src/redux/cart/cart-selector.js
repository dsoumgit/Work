/**
 * Note: 'reselect' package is installed in this app. 
 *  It allows to optimize the performance in Redux.
 */

// import this function 'createSelector'
import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
);

// total the price 
export const totalCartItems = createSelector(
    [selectCartItems],                          // quantity * price 
    cartItems => cartItems.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
)
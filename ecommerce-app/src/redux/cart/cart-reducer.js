import CardActionTypes from './cart-types';
import { addItemToCart, removeItemToCart } from './cart-utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CardActionTypes.TOGGLE_CART_HIDDEN: 
            return {
                ...state, 
                hidden: !state.hidden
            };
        case CardActionTypes.ADD_ITEM: 
            return {
                ...state, 
                cartItems: addItemToCart(state.cartItems, action.payload)
            };    
        case CardActionTypes.REMOVE_ITEM: 
            return {
                ...state,
                cartItems: removeItemToCart(state.cartItems, action.payload)
            }
        case CardActionTypes.CLEAR_ITEM_FROM_CART: 
            return {
                ...state, 
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default cardReducer;
import CartActionTypes from './cart-types';

export const toggleCartHidden  = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    }
}

export const addItem = item => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
}

export const removeCartItem = item => {
    return {
        type: CartActionTypes.REMOVE_ITEM,
        payload: item
    }
}

export const clearCartItem = item => {
    return {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: item
    }
}

/**
 * Note: payload is just an optional property and we're not using it in the cart reducer.
 *  So no need to pass the payload. We just want to know the state. 
 */
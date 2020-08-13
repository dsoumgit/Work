import CartActionTypes from './cart-types';

export const toggleCartHidden  = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    }
}

/**
 * Note: payload is just an optional property and we're not using it in the cart reducer.
 *  So no need to pass the payload. We just want to know the state. 
 */
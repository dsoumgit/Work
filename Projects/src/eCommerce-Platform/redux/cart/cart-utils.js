// function to check the existing cart item in the item array and 
//      return the same id
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => {
        return cartItemToAdd.id === item.id;
    });

    // if found 
    // if (existingCartItem) {
    //     // return a new aray 
    //     return cartItems.map(cartItem => {
    //         if (cartItem.id === cartItemToAdd.id) {
    //             return { 
    //                 ...cartItem, 
    //                 quantity: cartItem.quantity + 1
    //             }
    //         } else {
    //             return {
    //                 cartItem
    //             }
    //         }
    //     })
    // }

    // ES6 syntax 
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? 
                                { ...cartItem, quantity: cartItem.quantity + 1 } 
                                : 
                                cartItem)
    }

    // return a new array. Quantity property is added and starts at 1 as an initial.
    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];
}
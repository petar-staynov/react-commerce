export const addItemToCart = (cartItems, cartItemToAdd) => {
    const cartItemExists =
        cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (cartItemExists) {
        return cartItems.map(cartItem => {
            if (cartItem.id === cartItemToAdd.id) {
                return {...cartItem, quantity: cartItem.quantity + 1}
            }
            return cartItem
        })
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    let newCartItems =
        cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    return [...newCartItems]
};

export const decreaseItem = (cartItems, cartItemToDecrease) => {
    const cartItemExists =
        cartItems.find(cartItem => cartItem.id === cartItemToDecrease.id);

    if (cartItemExists) {
        // if (cartItemToDecrease.quantity === 1) {
        //     return removeItemFromCart(cartItems, cartItemToDecrease);
        // }

        if (cartItemToDecrease.quantity === 1) {
            return [...cartItems]
        }

        return cartItems.map(cartItem => {
            if (cartItem.id === cartItemToDecrease.id) {
                return {...cartItem, quantity: cartItem.quantity - 1}
            }
            return cartItem
        })
    }
    return [...cartItems]
};
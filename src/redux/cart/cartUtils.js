export const addItemToCart = (cartItems, cartItemToAdd) => {
    const cartItemExists =
        cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (cartItemExists) {
        return cartItems.map(cartItem => {
            if (cartItem.id === cartItemToAdd.id) {
                return {...cartItem, quantity: cartItem.quantity + 1}
            } else {
                return cartItem
            }
        })
    } else {
        return [...cartItems, {...cartItemToAdd, quantity: 1}]
    }
};
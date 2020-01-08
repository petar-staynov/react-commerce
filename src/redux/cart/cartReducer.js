import {CartActionTypes} from "./cartActionTypes";
import {addItemToCart, removeItemFromCart} from "./cartUtils";

const INITIAL_STATE = {
    cartHidden: true,
    cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                cartHidden: !state.cartHidden
            };
        case CartActionTypes.SHOW_CART:
            return {
                ...state,
                cartHidden: false,
            };
        case CartActionTypes.HIDE_CART:
            return {
                ...state,
                cartHidden: true,
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
};

export default cartReducer
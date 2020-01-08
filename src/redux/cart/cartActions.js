import {CartActionTypes} from "./cartActionTypes";

export const toggleCartHidden = () => (
    {
        type: CartActionTypes.TOGGLE_CART_HIDDEN,
    }
);

export const hideCart = () => (
    {
        type: CartActionTypes.HIDE_CART,
    }
);

export const showCart = () => (
    {
        type: CartActionTypes.SHOW_CART,
    }
);

export const addItem = (item) => (
    {
        type: CartActionTypes.ADD_ITEM,
        payload: item,
    }
);
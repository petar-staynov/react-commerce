import {CartActionTypes} from "./cartActionTypes";

export const toggleCartHiddenAction = () => (
    {
        type: CartActionTypes.TOGGLE_CART_HIDDEN,
    }
);

export const hideCartAction = () => (
    {
        type: CartActionTypes.HIDE_CART,
    }
);

export const showCartAction = () => (
    {
        type: CartActionTypes.SHOW_CART,
    }
);

export const addItemAction = (item) => (
    {
        type: CartActionTypes.ADD_ITEM,
        payload: item,
    }
);

export const removeItemAction = (item) => (
    {
        type: CartActionTypes.REMOVE_ITEM,
        payload: item,
    }
);
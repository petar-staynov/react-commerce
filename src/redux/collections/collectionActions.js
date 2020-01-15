import ShopActionTypes from "./collectionActionTypes";

export const UpdateCollections = collectionsMap => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
});
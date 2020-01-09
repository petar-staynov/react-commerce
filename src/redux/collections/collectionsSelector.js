import {createSelector} from 'reselect'

const selectCollectionsData = state => state.collections;

export const selectCollections = createSelector(
    [selectCollectionsData],
    collectionsData => collectionsData,
);

export const selectCollectionByName = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);
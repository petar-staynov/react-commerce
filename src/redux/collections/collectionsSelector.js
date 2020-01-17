import {createSelector} from 'reselect'

const selectCollectionsData = state => state.collections;

export const selectCollections = createSelector(
    [selectCollectionsData],
    collectionsData => collectionsData.collections ? collectionsData.collections : [],
);

export const selectCollectionByName = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);

export const selectIsCollectionFetching = createSelector(
    [selectCollectionsData],
    collections => collections.isFetching
);
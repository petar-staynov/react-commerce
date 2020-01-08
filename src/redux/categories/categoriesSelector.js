import {createSelector} from 'reselect'

const selectCategoriesData = state => state.categories;

export const selectCategories = createSelector(
    [selectCategoriesData],
    categoriesData => categoriesData,
);
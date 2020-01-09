import {createSelector} from 'reselect'

const selectDirectoriesData = state => state.directories;

export const selectDirectories = createSelector(
    [selectDirectoriesData],
    directoryData => directoryData,
);
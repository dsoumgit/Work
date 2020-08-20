import { createSelector } from 'reselect';

    // function to return the directory
const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)


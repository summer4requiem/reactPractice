// import {createSelector} from 'reselect';

import { AppStateType } from "./redux-store";

export const getAllUsers = (state: AppStateType) => {
    return state.usersPage.users;
}

// export const getAllUsersSelector = (state: AppStateType) => {
//     return getAllUsers(state: AppStateType).filter(u => u === true);
// }

// export const getAllUsersSuperSelector = createSelector(getAllUsers, (users) => {
//     return users.filter(u => true);
// });

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getFollowingUserProgress = (state: AppStateType) => {
    return state.usersPage.followingUserProgress
}
export const getIsPageLoading = (state: AppStateType) => {
    return state.usersPage.isPageLoading
}

export const countSomethingDifficult = (state: AppStateType) => {
    return state.usersPage.isPageLoading
}
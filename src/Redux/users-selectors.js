export const getAllUsers = (state) => {
    return state.usersPage.users;
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getFollowingUserProgress = (state) => {
    return state.usersPage.followingUserProgress
}
export const getIsPageLoading = (state) => {
    return state.usersPage.isPageLoading
}

export const countSomethingDifficult = (state) => {
    return state.usersPage.isPageLoading
}
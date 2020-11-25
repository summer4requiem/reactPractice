import {
    UsersAPI
} from "../API/api";

const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const CHANGE_USER_PAGE = 'CHANGE-USER-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING';
const TOGGLE_FOLLOWING = 'TOGGLE-FOLLOWING';

export const unfollow = (userID) => ({
    type: UNFOLLOW,
    userID: userID,
});

export const follow = (userID) => ({
    type: FOLLOW,
    userID: userID
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users: users
});

export const setTotalCount = (count) => ({
    type: SET_TOTAL_COUNT,
    totalCount: count
});

export const changeCurrentPage = (page) => ({
    type: CHANGE_USER_PAGE,
    currentPage: page
});

export const toggleFetching = (isPageLoading) => ({
    type: TOGGLE_FETCHING,
    isPageLoading: isPageLoading
});

export const toggleFollowing = (isDisabledBtn, userId) => ({
    type: TOGGLE_FOLLOWING,
    userId: userId,
    isPageLoading: isDisabledBtn,
});

//Thunk - засетает пользователей в store
export const getUsersThunkCreator = (currentPage, pageSize) => {
    return dispatch => {
        dispatch(toggleFetching(true));
        if (initialState.users.length === 0) {
            UsersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(toggleFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalCount(data.totalCount));
            });
        }
    }
}

export const changePageThunkCreator = (pageNumber, pageSize) => {
    return dispatch => {
            dispatch(toggleFetching(true));
            // dispatch(changePage(pageNumber));
            UsersAPI.getUsers(pageNumber, pageSize).then(data => {
                dispatch(toggleFetching(false));
                dispatch(setUsers(data.items));
            });
}
}


export const getFollowThunkCreator = (userId) => {
    return dispatch => {
        dispatch(toggleFollowing(true, userId));
        UsersAPI.followUser(userId).then(() => {
            dispatch(follow(userId));
        });
        dispatch(toggleFollowing(false, userId));
    }
}


export const getUnFollowThunkCreator = (userId) => {
    return dispatch => {
        dispatch(toggleFollowing(true, userId));
        UsersAPI.unFollowUser(userId).then(() => {
            dispatch(unfollow(userId));
        })
        dispatch(toggleFollowing(false, userId));
    }
}

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 20,
    currentPage: 1,
    isPageLoading: false,
    currentFollowUsersId: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            isFollowed: true
                        };
                    }
                    return u;
                }),
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            isFollowed: false
                        };
                    }
                    return u;
                }),
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }

        case CHANGE_USER_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }

        case TOGGLE_FETCHING: {
            return {
                ...state,
                isPageLoading: action.isPageLoading
            }
        }


        case TOGGLE_FOLLOWING: {
            return {
                ...state,
                currentFollowUsersId: action.isPageLoading ? [...state.currentFollowUsersId, action.userId] : state.currentFollowUsersId.filter(id => id !== action.userId),
            }
        }

        default:
            return state;
    }
}

export default usersReducer;
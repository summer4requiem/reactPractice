import {UsersAPI} from "../API/api";

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

const isFollowOrUnFollow = async (dispatch, userId, API_Method, actionCreator) => {
    dispatch(toggleFollowing(true, userId));
    await API_Method(userId);
    dispatch(actionCreator(userId));
    dispatch(toggleFollowing(false, userId));
}

// export const getUsersThunkCreator = (pageSize, currentPage) => async (dispatch) => {
//     dispatch(toggleFetching(true));
//     if (initialState.users.length === 0) {
//         let data = await UsersAPI.getUsers(pageSize, currentPage);
//         dispatch(toggleFetching(false));
//         dispatch(setUsers(data.items));
//         dispatch(setTotalCount(data.totalCount));
//     };
// }

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
 
// export const changePageThunkCreator = (pageNumber, pageSize) => async (dispatch) => {
//     dispatch(toggleFetching(true));
//     dispatch(changeCurrentPage(pageNumber));
//     const data = await UsersAPI.getUsers(pageNumber, pageSize);
//     dispatch(toggleFetching(false));
//     dispatch(setUsers(data.items));
// }

export const getFollowThunkCreator = (userId) => async (dispatch) => {
    isFollowOrUnFollow(dispatch, userId, UsersAPI.followUser, follow);
}

export const getUnFollowThunkCreator = (userId) => async (dispatch) => {
        isFollowOrUnFollow(dispatch, userId, UsersAPI.unFollowUser, unfollow);
}

let initialState = {
    users: [],
    pageSize: 90,
    totalUsersCount: 20,
    currentPage: 1,
    isPageLoading: false,
    followingUserProgress: [],
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
                            followed: true
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
                            followed: false
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
                followingUserProgress: action.isPageLoading ? [...state.followingUserProgress, action.userId] : state.followingUserProgress.filter(id => id !== action.userId),
            }
        }

        default:
            return state;
    }
}

export default usersReducer;
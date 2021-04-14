import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { UsersAPI } from "../API/api";
import { UserTypes } from "../types/types";
import { AppStateType } from "./redux-store";
const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const CHANGE_USER_PAGE = 'CHANGE-USER-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING';
const TOGGLE_FOLLOWING = 'TOGGLE-FOLLOWING';
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, Action<string>>;
type DispatchType = Dispatch<ActionsTypes>
type ActionsTypes = followType | toggleFetchType | setUserType | totalCountType | changeCurrentPageType | toggleFollowingType;

type followType = {
    type: typeof UNFOLLOW | typeof FOLLOW,
    userID: number,
}
type toggleFetchType = {
    type: typeof TOGGLE_FETCHING,
    isPageLoading: boolean,
}
type toggleFollowingType = {
    type: typeof TOGGLE_FOLLOWING,
    userId: number,
    isPageLoading: boolean,
}
type setUserType = {
    type: typeof SET_USERS,
    users: any,
}
type totalCountType = {
    type: typeof SET_TOTAL_COUNT,
    totalUsersCount: number,
}
type changeCurrentPageType = {
    type: typeof CHANGE_USER_PAGE,
    currentPage: number,
}

export const unfollow = (userID: number): followType => ({
    type: UNFOLLOW,
    userID: userID,
});

export const follow = (userID: number): followType => ({
    type: FOLLOW,
    userID: userID
});

export const setUsers = (users: any): setUserType => ({
    type: SET_USERS,
    users: users,
});

export const setTotalCount = (count: number): totalCountType => ({
    type: SET_TOTAL_COUNT,
    totalUsersCount: count
});

export const changeCurrentPage = (page: number): changeCurrentPageType => ({
    type: CHANGE_USER_PAGE,
    currentPage: page
});

export const toggleFetching = (isPageLoading: boolean): toggleFetchType => ({
    type: TOGGLE_FETCHING,
    isPageLoading: isPageLoading
});

export const toggleFollowing = (isDisabledBtn: boolean, userId: number): toggleFollowingType => ({
    type: TOGGLE_FOLLOWING,
    userId: userId,
    isPageLoading: isDisabledBtn,
});

const isFollowOrUnFollow = async (dispatch: DispatchType, userId: number, API_Method: any, actionCreator: any) => {
    dispatch(toggleFollowing(true, userId));
    await API_Method(userId);
    dispatch(actionCreator(userId));
    dispatch(toggleFollowing(false, userId));
}

export const getUsersThunkCreator = (pageSize: number, currentPage: number): ThunkType => async (dispatch: DispatchType) => {
    dispatch(toggleFetching(true));
    if (initialState.users.length === 0) {
        let data = await UsersAPI.getUsers(pageSize, currentPage);
        dispatch(toggleFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
    };
}

export const changePageThunkCreator = (pageNumber: number, pageSize: number): ThunkType =>
    async (dispatch: DispatchType, getState: () => AppStateType) => {
        dispatch(toggleFetching(true));
        dispatch(changeCurrentPage(pageNumber));
        let data = await UsersAPI.getUsers(pageNumber, pageSize);
        debugger;
        dispatch(toggleFetching(false));
        dispatch(setTotalCount(data.totalCount));
        dispatch(setUsers(data.items));
    }

export const followUser = (userId: number) => async (dispatch: DispatchType) => {
    isFollowOrUnFollow(dispatch, userId, UsersAPI.followUser, follow);
}

export const unFollowUser = (userId: number): ThunkType => async (dispatch: DispatchType) => {
    isFollowOrUnFollow(dispatch, userId, UsersAPI.unFollowUser, unfollow);
}

let initialState = {
    users: [] as Array<UserTypes>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isPageLoading: false,
    //Array of users id
    followingUserProgress: [] as Array<number>,
}

type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {
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
                users: action.users,
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
                totalUsersCount: action.totalUsersCount
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

const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const CHANGE_USER_PAGE = 'CHANGE-USER-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING';


export const unfollowAC = (userID) => ({
    type: 'UNFOLLOW',
    userID: userID,
});

export const followAC = (userID) => ({
    type: 'FOLLOW',
    userID: userID
});

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
}

export const setUsersAC = (users) => ({
    type: 'SET-USERS',
    users: users
});


export const setTotalCountAC = (count) => ({
    type: 'SET-TOTAL-COUNT',
    totalCount: count
});

export const changeCurrentPageAC = (page) => ({
    type: 'CHANGE-USER-PAGE',
    currentPage: page
});

export const isFetchingAC = (isFetching) => ({
    type: 'TOGGLE-FETCHING',
    isFetching: isFetching
});

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
            debugger;
            return { ...state, isFetching: action.isFetching}
        }

        default:
            return state;
    }
}


export default usersReducer;
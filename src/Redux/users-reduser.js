const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';


export const unfollowAC = (userID) => ({
    type: 'UNFOLLOW',
    userID: userID,
});


export const followAC = (userID) => ({
    type: 'FOLLOW',
    userID: userID
});

let initialState = {
    users: []
}

export const setUsersAC = (users) => ({
    type: 'SET-USERS',
    users: users
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
                users: [...state.users, ...action.users]
            }
        }

        default:
            return state;
    }
}


export default usersReducer;
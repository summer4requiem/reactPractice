const SET_USER_DATA = 'SET-USER-DATA';

export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId: userId,
            email: email,
            login: login,
            isAuth: false,
        }
    }
}

let initialState = {
    userId: null,
    login: null,
    email: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                    isAuth: true,
            }
            default:
                return state;
    }
}

export default authReducer;
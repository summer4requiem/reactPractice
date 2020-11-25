import {
    AuthAPI
} from "../API/api";
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


export const getAuthThunkCreator = () => {
    return dispatch => AuthAPI.getAuth().then(response => {
        let {id, email, login} = response.data.data;
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(id, email, login));
            }
        });
    
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
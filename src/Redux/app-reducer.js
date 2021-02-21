import {stopSubmit} from "redux-form";
import {AuthAPI} from "../API/api";
const SET_USER_DATA = 'SET-USER-DATA';
const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId: userId,
            email: email,
            login: login,
            isAuth: isAuth,
        }
    }
}

export const initializedSuccess= () => {
    return{
        type: INITIALIZED_SUCCESS,
    }
}

let initialState = {
    initialized: false,
    userId: null,
    login: null,
    email: null,
}

export const getAuth = () => (dispatch) => {
    return AuthAPI.getAuth().then(response => {
        let {
            id,
            email,
            login
        } = response.data.data;
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}

export const LoginTC = (email, password, rememberMe, captcha) => (dispatch) => {
    AuthAPI.logIn(email, password, rememberMe, captcha).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuth());
        } else {
            let messages = response.data.messages[0].length > 0 ? response.data.messages[0] : 'Some error';
            let action = stopSubmit("login", {
                _error: messages
            });
            dispatch(action);
        }
    });
}

export const LogOut = () => {
    return dispatch => AuthAPI.logOut().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}

export const initializeApp= () => (dispatch)=>{
    let promise = dispatch(getAuth());
    Promise.all([promise])
        .then(()=> dispatch(initializedSuccess()));
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                    isAuth: action.data.isAuth,
            }
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
            default:
                return state;
    }
}

export default appReducer;
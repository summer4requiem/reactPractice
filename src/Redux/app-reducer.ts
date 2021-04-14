import {stopSubmit } from "redux-form";
import { AuthAPI ,ResultCodesEnum} from "../API/api";
const SET_USER_DATA = 'SET-USER-DATA';
const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

type setAuthUserData = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean | null,
}

type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    data: setAuthUserData,
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null): setAuthUserDataActionType => {
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

export type initialStateType = {
    initialized: boolean,
    userId: null | number,
    login: null | string,
    email: null | string,
}

let initialState: initialStateType = {
    initialized: false,
    userId: null,
    login: null,
    email: null,
}

export const getAuth = () => async (dispatch:any) => {
    let res = await AuthAPI.getAuth();
    if (res.resultCode === ResultCodesEnum.success) {
        let {
            id,
            email,
            login
        } = res.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const LoginTC = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let data = await AuthAPI.logIn(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodesEnum.success) {
        dispatch(getAuth());
    } else {
        let messages = data.messages[0].length > 0 ? data.messages[0] : 'Some error';
        let action = stopSubmit("login", {
            _error: messages
        });
        dispatch(action);
    }
}

export const LogOut = () => async (dispatch: any) => {
    let response = await AuthAPI.logOut();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS,
}

export const initializedSuccess = (): initializedSuccessActionType => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}

// export const initializeApp = () => (dispatch: any) => {
//     let promise = dispatch(getAuth());
//     Promise.all([promise])
//         .then(() => dispatch(initializedSuccess()));
// };

export const initializeApp = () => async (dispatch: any) => {
    await dispatch(getAuth());
    dispatch(initializedSuccess());
};

const appReducer = (state = initialState, action: any): initialStateType => {
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

import {
ProfileAPI
} from '../API/api';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATS';

export const addPost = () => {
    return {
        type: ADD_POST,
    }
}

export const updateNewPostText = (newText) => {
    return {
        type: UPDATE_NEW_POST,
        newText: newText,
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
}

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status,
    }
}

let initialState = {
    posts: [{
            message: 'hi, how are you',
            id: 1,
            likesCount: 11,
        },
        {
            message: 'my second post',
            id: 2,
            likesCount: 12,
        },
        {
            message: "it's my first post",
            id: 3,
            likesCount: 14,
        }
    ],
    newPostText: '',
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: Math.floor(Math.random() * 100),
                message: state.newPostText,
                likesCount: Math.floor(Math.random(2) * 100),
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }

        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }

        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }
}

// thunks 

export const getProfile = (userId) => (dispatch) => {
    ProfileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}

export const getProfileStatus = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data));
        });
}

export const updateUserStatus = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
}

export default profileReducer;
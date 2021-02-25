import {ProfileAPI} from '../API/api';
const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

export const addPost = (post) => {
    return {
        type: ADD_POST,
        post: post,
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

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        post: postId,
    }
};

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
        },
        {
            message: "it's my first post",
            id: 4,
            likesCount: 14,
        }
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: Math.floor(Math.random() * 100),
                message: action.post,
                likesCount: Math.floor(Math.random(2) * 100),
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }

        case DELETE_POST: {
            return {
                ...state,
                profile: [...state.posts.filter(p => p !== action.postId)],
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
export const getProfile = (userId) => async (dispatch) => {
    const response = await ProfileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getProfileStatus = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export default profileReducer;
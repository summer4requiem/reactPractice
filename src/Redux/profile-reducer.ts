import { ProfileAPI } from '../API/api';
import {ProfileTypes, PostTypes } from '../types/types';
const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

type AddPostType = {
    type: typeof ADD_POST,
    post: string,
}

type setUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: any,
}

type setUserStatusType = {
    type: typeof SET_USER_STATUS,
    status: string,
}

type deletePost = {
    type: typeof DELETE_POST,
    postId: number,
}

export const addPost = (post: string): AddPostType => {
    return {
        type: ADD_POST,
        post: post,
    }
}

export const setUserProfile = (profile: Object): setUserProfileType => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
}

export const setUserStatus = (status: string): setUserStatusType => {
    return {
        type: SET_USER_STATUS,
        status,
    }
}

export const deletePost = (postId: number): deletePost => {
    return {
        type: DELETE_POST,
        postId: postId,
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
    ] as Array<PostTypes>,
    profile: null as ProfileTypes | null,
    status: '',
}

type initialStateType = {
    posts: Array<PostTypes>,
    profile: object | null,
    status: string
};

const profileReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: Math.floor(Math.random() * 100),
                message: action.post,
                likesCount: Math.floor(Math.random() * 100),
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

export const getProfile = (userId: number) => async (dispatch: any) => {
    const response = await ProfileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getProfileStatus = (userId: number) => async (dispatch: any) => {
    let response = await ProfileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
};

export const updateUserStatus = (status: string) => async (dispatch: any) => {
    let response = await ProfileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export default profileReducer;
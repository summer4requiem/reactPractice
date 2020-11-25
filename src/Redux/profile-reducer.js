import {
    ProfileAPI
} from '../API/api';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

export const addPost = () => {
    return {
        type: 'ADD-POST',
    }
}
export const updateNewPostText = (newText) => {
    return {
        type: 'UPDATE-NEW-POST',
        newText: newText,
    }
}

export const setUserProfile = (profile) => {
    return {
        type: 'SET-USER-PROFILE',
        profile,
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

        default:
            return state;
    }
}

export const getProfileThunkCreator = (userId) => (dispatch) => {
    ProfileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export default profileReducer;
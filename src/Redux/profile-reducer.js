const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';


export const addPostActionCreater = () => {
    return {
        type: 'ADD-POST',
    }
}

export const updateNewPostText = (newtext) => {
    return {
        type: 'UPDATE-NEW-POST',
        newtext: newtext,
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
                newPostText: action.newtext,
            }
        }

        default:
            return state;
    }
}

export default profileReducer;
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
            id: 2,
            likesCount: 14,
        }
    ],

    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: Math.floor(Math.random(2) * 100),
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }

        case UPDATE_NEW_POST: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newtext;
            return stateCopy;
        }

        default:
            return state;
    }
}

export default profileReducer;
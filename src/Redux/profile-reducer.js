const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-TEXT';

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: Math.floor(Math.random(2) * 100),
        };

        state.posts.push(newPost);
        state.newPostText = '';

    } else if (action.type === UPDATE_NEW_POST) {
        state.newPostText = action.text;
    }
}

export default profileReducer;
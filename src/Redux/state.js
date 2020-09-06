import {
    rerenderEntireTree
} from "../render";


let state = {

    profilePage: {
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

        newPostText: ' fffff',

    },

    messagesPage: {
        messages: [{
                id: 1,
                message: 'Hi, there'
            },
            {
                id: 2,
                message: 'how are you'
            },
            {
                id: 3,
                message: 'Sanya Vasiliy'
            },
            {
                id: 4,
                message: 'Dymich'
            },
            {
                id: 5,
                message: 'Yooo'
            },
            {
                id: 6,
                message: 'Aghaaaaa'
            }
        ],

        newMessageText: ' ',

        dialogs: [{
                id: 1,
                name: 'Andrew'
            },
            {
                id: 2,
                name: 'Dymich'
            },
            {
                id: 3,
                name: 'Sanya'
            },
            {
                id: 4,
                name: 'Dymich'
            },
            {
                id: 4,
                name: 'Yarick'
            },
            {
                id: 4,
                name: 'Sveta'
            }
        ],

    },
}




export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: Math.floor(Math.random(2) * 100),
    };

    state.profilePage.posts.push(newPost);
    updatePostFieldText('');
    rerenderEntireTree(state);
}

export let updatePostFieldText = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
}


export let addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.messagesPage.newMessageText,
    };

    state.messagesPage.messages.push(newMessage);
    updateMessageFieldText('');
    rerenderEntireTree(state);
}

export let updateMessageFieldText = (text) => {
    state.messagesPage.newMessageText = text;
    rerenderEntireTree(state);
}

window.state = state;

export default state;
let store = {
    _state: {
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
            newPostText: '',
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
    },
    _rerenderEntireTree() {},

    getState() {
        return this._state;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: Math.floor(Math.random(2) * 100),
        };

        this._state.profilePage.posts.push(newPost);
        this.updatePostFieldText('');
        this._rerenderEntireTree(this._state);
    },

    updatePostFieldText(text) {
        this._state.profilePage.newPostText = text;
        this._rerenderEntireTree(this._state);
    },

    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.messagesPage.newMessageText,
        };

        this._state.messagesPage.messages.push(newMessage);
        this.updateMessageFieldText('');
        this._rerenderEntireTree(this._state);
    },


    updateMessageFieldText(text) {
        this._state.messagesPage.newMessageText = text;
        this._rerenderEntireTree(this._state);
    },



    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: Math.floor(Math.random(2) * 100),
            };

            this._state.profilePage.posts.push(newPost);
            this.updatePostFieldText('');
            this._rerenderEntireTree(this._state);

        } else if (action.type === 'UPDATE-NEW-TEXT') {
            this._state.profilePage.newPostText = action.text;
            this._rerenderEntireTree(this._state);
        }

    }
}

export default store;
window.store = store;
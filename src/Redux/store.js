import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';


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

            newMessageText: '',

        },


    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }
}



export default store;
window.store = store;
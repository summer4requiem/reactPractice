const UPDATE_MESSAGE_FIELD = 'UPDATE-MESSAGE-FIELD';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';


export const addNewMessageCreater = () => {
    return {
        type: 'ADD-NEW-MESSAGE',
    }
}

export const updateNewMessageCreater = (newMessage) => {
    return {
        type: 'UPDATE-MESSAGE-FIELD',
        text: newMessage,
    }
}

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_FIELD:
            state.newMessageText = action.text;
            return state;
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;
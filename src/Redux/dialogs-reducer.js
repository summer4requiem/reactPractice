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
            id: 5,
            name: 'Yarick'
        },
        {
            id: 6,
            name: 'Sveta'
        }
    ],

    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_FIELD:
            return {
                ...state,
                newMessageText: action.text,
            }
            case ADD_NEW_MESSAGE:
                let newMessage = {
                    id: 58,
                    message: state.newMessageText,
                };
                return {
                    ...state,
                    messages: [...state.messages, newMessage],
                        newMessageText: '',
                }

                default:
                    return state;
    }
}



export default dialogsReducer;
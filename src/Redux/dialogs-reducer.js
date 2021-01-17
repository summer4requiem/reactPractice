const ADD_MESSAGE = 'ADD-MESSAGE';

export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message: message, 
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
            case ADD_MESSAGE:
                let newMessage = {
                    id: 58,
                    message: action.message,
                };
                return {
                    ...state,
                    messages: [...state.messages, newMessage],
                }

                default:
                    return state;
    }
}

export default dialogsReducer;

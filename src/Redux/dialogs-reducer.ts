const ADD_MESSAGE = 'ADD-MESSAGE';

type DialogType = {
    id: number,
    name: string,
}

type MessageType = {
    id: number,
    message: string,
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
        message: 'Sanaa Easily'
    },
    {
        id: 4,
        message: 'Mich'
    },
    {
        id: 5,
        message: 'Yoko'
    },
    {
        id: 6,
        message: 'Agatha'
    }
    ] as Array<MessageType>,

    dialogs: [{
        id: 1,
        name: 'Andrew'
    },
    {
        id: 2,
        name: 'Mich'
    },
    {
        id: 3,
        name: 'Sanga'
    },
    {
        id: 4,
        name: 'Dynamics'
    },
    {
        id: 5,
        name: 'Hayrick'
    },
    {
        id: 6,
        name: 'Seat'
    }
    ] as Array<DialogType>,
}

export type initialStateType = typeof initialState

type addMessageType = {
    type: typeof ADD_MESSAGE,
    message: string,
}

export const addMessage = (message: string): addMessageType => {
    return {
        type: ADD_MESSAGE,
        message: message,
    }
}

const dialogsReducer = (state = initialState, action: any): initialStateType => {
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

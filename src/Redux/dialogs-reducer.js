const UPDATE_MESSAGE_FIELD = 'UPDATE-MESSAGE-FIELD';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';


const dialogsReducer = (state, action) => {
    if (action.type === UPDATE_MESSAGE_FIELD) {
        state.newMessageText = action.text;
    } else if (action.type === ADD_NEW_MESSAGE) {
        let newMessage = {
            id: 5,
            message: state.newMessageText,
        };
        state.messages.push(newMessage);
        state.newMessageText = '';
    }

    return state;
}

export default dialogsReducer;
import React from 'react';
import Dialogs from './Dialogs';
import { addNewMessageCreater, updateNewMessageCreater } from '../../Redux/dialogs-reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState().dialogsPage;

        let addMessage = () => {
          store.dispatch(addNewMessageCreater());
        }

        let updateMessage = (newMessage) => {
          store.dispatch(updateNewMessageCreater(newMessage));
        }
        return <Dialogs dialogs={state.dialogs} newMessageText={state.newMessageText} messages={state.messages} addMessage={addMessage} updateMessage={updateMessage} />
      }
    }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;


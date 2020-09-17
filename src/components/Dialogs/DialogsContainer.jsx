import React from 'react';
import Dialogs from './Dialogs';
import { addNewMessageCreater, updateNewMessageCreater } from '../../Redux/dialogs-reducer';

const DialogsContainer = (props) => {
  let store = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addNewMessageCreater());
  }

  let updateMessage = (newMessage) => {
    props.store.dispatch(updateNewMessageCreater(newMessage));
  }

  return (
    <Dialogs dialogs={store.dialogsPage.dialogs} newMessageText={store.dialogsPage.newMessageText} messages={store.dialogsPage.messages} addMessage={addMessage} updateMessage={updateMessage} />
  )
}

export default DialogsContainer;


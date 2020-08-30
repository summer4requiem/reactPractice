import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from './DialogItem'
import MessageItem from './MessageItem'


const Dialogs = (props) => {
  debugger;
  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messageElements = props.state.messages.map(m => <MessageItem message={m.message} />);

  return (
    <section className={s.dialogs}>
      <div className={s.dialogsNames}>
        <ul className={s.dialogsList}>
          {dialogsElements}
        </ul>
      </div>
      <div className={s.dialogsMessages}>
        <ul className={s.messagesList}>
          {messageElements}
        </ul>
      </div>
    </section>
  )
};

export default Dialogs;
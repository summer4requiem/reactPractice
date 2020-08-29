import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from './DialogItem'
import MessageItem from './MessageItem'


const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messageElements = props.messages.map(m => <MessageItem message={m.message} />);

  return (
    <section className={s.dialogs}>
      <div className={s.dialogsNames}>
        {/* <h3 className={s.dialogsTitle}>Dialogs</h3> */}
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
import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from './DialogItem'
import MessageItem from './MessageItem'


const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messageElements = props.messages.map(m => <MessageItem message={m.message} />);

  let onMessageSend = () => {
    props.addMessage();
  }

  let onMessageFieldChange = (eventObj) => {
    let newText = eventObj.target.value;
    props.updateMessage((newText));
  }

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
        <div className={s.dialogsSend}>
          <textarea maxLength="140" onChange={onMessageFieldChange} className={s.dialogsSendTextarea} cname="" id="" value={props.newMessageText} />
          <button onClick={onMessageSend} className={s.dialogsSendBtn} type="submit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -22 512 511"><path d="m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0" /></svg></button>
        </div>
      </div>
    </section>
  )
};

export default Dialogs;
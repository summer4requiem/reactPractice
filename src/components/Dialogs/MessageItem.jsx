import React from 'react';
import s from "./Dialogs.module.css"

const MessageItem = (props) => {
    return (
      <li className={s.messagesItem}>
      <textarea className={s.messageField} name="message" id="" cols="30" rows="10" value={props.message} resize="none" readOnly></textarea>
      </li>
    )
  }

export default MessageItem;
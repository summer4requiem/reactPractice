import React from 'react';
import s from "./Dialogs.module.css"

const MessageItem = (props) => {
    return (
      <li className={s.messagesItem}>{props.message}</li>
    )
  }

export default MessageItem;
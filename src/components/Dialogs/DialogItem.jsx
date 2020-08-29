import React from 'react';
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
      <li className={s.dialogsItem + ' ' + s.active}>
        <NavLink className={s.dialogsItemLink} to={path}>{props.name}</NavLink>
      </li>
    )
  }

export default DialogItem;
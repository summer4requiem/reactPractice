import React from 'react';
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <li className={s.dialogsItem + ' ' + s.active}>
      <div className={s.dialogsImgWrapper}>
        <img src="https://ath2.unileverservices.com/wp-content/uploads/sites/8/2019/02/man-ponytail-curly-bun-ponytail-shutterstock-1024x913.jpg" width="45" alt="" />
      </div>
      <NavLink className={s.dialogsItemLink} to={path}>{props.name}</NavLink>
    </li>
  )
}

export default DialogItem;
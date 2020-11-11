import React from "react";
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <header className={s.header}>
    <img src="https://image.flaticon.com/icons/svg/124/124555.svg" width="40" height="40" alt="Logo" />
      <div className={s.header__login}>
      <NavLink className={s.header__userinfo}  to="/login">
      {props.isAuth ? props.login.slice(0,1) : `Sign up`}
      </NavLink>
      </div>
      <div className={s.headerUserId}>
      </div>
  </header >
);

export default Header;
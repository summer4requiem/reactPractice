import React from "react";
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <header className={s.header}>
    <img src="https://image.flaticon.com/icons/svg/124/124555.svg" width="40" height="40" alt="Logo" />
      <div className={s.header__login}>
      </div>
      <div className={s.headerUserId}>
      <NavLink to="/login">
      {props.isAuth ? props.login : `Sign up`}
      </NavLink>
      </div>
  </header >
);

export default Header;
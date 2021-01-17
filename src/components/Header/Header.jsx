import React from "react";
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
  return (
    <header className={s.header} >
      <img src="https://image.flaticon.com/icons/svg/124/124555.svg" width="40" height="40" alt="Logo" />
      <div className={s.header__login}>
        <NavLink className={s.header__userinfo} to="/login">
          {props.isAuth ? <div>{props.login}
            <button onClick={props.LogOut} className={s.header__userinfo__auth_btn} variant="contained" color="secondary" href="#outlined-buttons">logOut</button>
          </div>
            : `Sign up`}
        </NavLink>
      </div>
      <div className={s.headerUserId}>
      </div>
    </header>
  )
};

export default Header;
import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import Sidebar from "../SideBar/SideBar";


const Navigation = (props) => { 
    return (
        <nav className={s.navigation}>
            <ul className={s.navigationList}>
                <li className={s.navigationItem}><NavLink to="/profile" activeClassName={s.activeLink}>Home</NavLink></li>
                <li className={s.navigationItem}><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></li>
                <li className={s.navigationItem}><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></li>
                <li className={s.navigationItem}><NavLink to="/dialogs" activeClassName={s.activeLink}>Message</NavLink></li>
            </ul>
            <Sidebar state={props.state.dialogs}/>
        </nav>
    )
}


export default Navigation;
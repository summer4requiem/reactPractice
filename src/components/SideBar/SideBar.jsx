import React from 'react';
import s from './SideBar.module.css';
import { NavLink } from 'react-router-dom';


const FriendItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <li className={s.friendsItem}>
      <NavLink to={path}>
      <div>
      <img src="https://sun9-5.userapi.com/impg/pKJLmYXoahNBbw0WVBAl_It9RkfUGUkL_S_iVg/8NNeqCXYZaI.jpg?size=200x0&quality=88&crop=477,8,1687,1687&sign=f5124c5af5b3b689c41ecf249f863091&ava=1" alt="" />
      </div>
      <span className={s.friendsItemName}>{props.name}</span>
      </NavLink>
    </li>
  )
}


const Sidebar = (props) => {
  let friendsItem = props.state.map((friend) => <FriendItem name={friend.name}  id={friend.id}/>)
  return (
    <aside className={s.sideBarTitle}>
      <div>
        <p className={s.friensBar}>Friends</p>
        <ul className={s.friensList}>
        {friendsItem}
        </ul>
      </div>
    </aside>
  )
}



export default Sidebar;

import React from 'react';
import s from './SideBar.module.css';
import { NavLink } from 'react-router-dom';


const FriendItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <li className={s.friendsItem}>
      <NavLink to={path}>
      <div>
      <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" alt="" />
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

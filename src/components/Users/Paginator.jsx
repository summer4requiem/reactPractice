import React from "react";
import s from "./Users.module.css";

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let index = 1; index <= pagesCount; index++) {
    pages.push(index);
  }
  return (
    <ol className={s.usersPaginationList}>
      {pages.map((p) => (
        <li
          onClick={() => {
            props.changePageOnClick(p);
          }}
          className={props.currentPage === p ? s.activePage : s.userListItem}
        >
          {p}
        </li>
      ))}
    </ol>
  );
};
export default Paginator;

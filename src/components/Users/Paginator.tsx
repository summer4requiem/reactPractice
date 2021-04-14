import React from "react";
import s from "./Users.module.css"
import {Button} from "@material-ui/core";

type PropsTypes = {
  totalUsersCount: number,
  pageSize: number,
  currentPage: number,
  changePageOnClick: (pageNumber: number) => void,
}

const Paginator: React.FC<PropsTypes> = (props) => {
  let size = 20;
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);  // pagesCount ко-во отрисующихся  страниц
  let pages: Array<number> = [];
  let portionSize = props.totalUsersCount/pagesCount;
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPorionSize = (portionNumber -1) * portionSize + 1;
  let rightPorionSize = portionNumber * portionSize;

  for (let index = 1; index <= pagesCount; index++) {
    pages.push(index);
  }
  return (
      <div>
        <Button onClick={()=> setPortionNumber(portionNumber -1)} variant="contained" size="small">
          prev
        </Button>
    <ol className={s.usersPaginationList}>
      {pages.filter((page) => page>= leftPorionSize && page <= rightPorionSize(
        <li
          onClick={() => {
            props.changePageOnClick(page);
          }}
          className={props.currentPage === page ? s.activePage : ''}
        >
          {page}
        </li>
      ))}
    </ol>
        <Button onClick={()=> setPortionNumber(portionNumber +1)} variant="contained" size="small" >
          next
        </Button>
      </div>
  );
};
export default Paginator;

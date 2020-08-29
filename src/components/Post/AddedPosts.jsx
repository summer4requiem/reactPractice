import React from 'react';
import s from "./Post.module.css"


const AddedPosts = (props) => {
  return (
    <div div className={s.post} >
      <div className={s.postImgWrapper}>
        <img className={s.postImg} src="https://sun9-12.userapi.com/c855524/v855524471/75883/Q_Zc64myPYY.jpg" alt="" width="50" height="50" />
      </div>
      <div className={s.postRating}>{props.message}
        <div>likes {props.likesCount}</div>
      </div>
  </div>
  )
}

export default AddedPosts;



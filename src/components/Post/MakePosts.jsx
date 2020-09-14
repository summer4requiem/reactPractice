import React from 'react';
import AddedPosts from "./AddedPosts";
import s from "./Post.module.css";
import { addPostActionCreater, updateNewPostText } from '../../Redux/profile-reducer';

const MakePosts = (props) => {
  let postElements = props.posts.map(p => <AddedPosts message={p.message} likesCount={p.likesCount} />);

  let onPostsSendBtn = () => {
    props.dispatch(addPostActionCreater());
  }

  let onPostChange = (eventObj) => {
    let newtext = eventObj.target.value;
    props.dispatch(updateNewPostText(newtext));
  }

  return (
    <section>
      <div className="posts">
        <label className="posts__header" htmlFor="post">My posts</label>
        <div className="posts__wrapper">
          <textarea onChange={onPostChange} name="post" id="post" cols="30" rows="10" width="100%" value={props.newPostText} />
          <button onClick={onPostsSendBtn} className={s.postsSendBtn} type="submit">Post</button>
        </div>
      </div>
      {postElements}
    </section>
  )
};

export default MakePosts; 
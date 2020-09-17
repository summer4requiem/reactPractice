import React from 'react';
import AddedPosts from "./AddedPosts";
import s from "./Post.module.css";

const MakePosts = (props) => {
  let postElements = props.posts.map(p => <AddedPosts message={p.message} likesCount={p.likesCount} />);

  let onPostsSendBtn = () => {
    props.addPost();
  }

  let onPostChange = (eventObj) => {
    let newtext = eventObj.target.value;
    props.updateNewPostText(newtext);
  }

  return (
    <section>
      <div className={s.posts}>
        <label className={s.postsHeader} htmlFor="post">My posts</label>
        <div className={s.postsWrapper}>
          <textarea onChange={onPostChange} name="post" id="post" cols="30" rows="10" width="100%" value={props.newPostText} />
          <button onClick={onPostsSendBtn} className={s.postsSendBtn} type="submit">Post</button>
        </div>
      </div>
      {postElements}
    </section>
  )
};

export default MakePosts; 
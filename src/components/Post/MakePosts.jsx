import React from 'react';
import AddedPosts from "./AddedPosts";
import s from "./Post.module.css"


const MakePosts = (props) => {
  debugger;
  
  let postElements = props.posts.map(p => <AddedPosts message={p.message} likesCount={p.likesCount} />);
  let newPost = React.createRef();

  let onPostsSendBtn = () => {
    props.addPost();
  }


  let onPostChange = () => {
    let text = newPost.current.value;
    props.updatePostFieldText(text);
  }

  return (
    <section>
      <div className="posts">
        <label className="posts__header" htmlFor="post">My posts</label>
        <div className="posts__wrapper">
          <textarea onChange={onPostChange} ref={newPost} name="post" id="post" cols="30" rows="10" width="100%" value={props.posts.newPostText} />
          <button onClick={onPostsSendBtn} className={s.postsSendBtn} type="submit">Post</button>
        </div>
      </div>
      {postElements}
    </section >
  )
};

export default MakePosts; 
import React from 'react';
import AddedPosts from "./AddedPosts";


const MakePosts = (props) => {
  let postElements = props.posts.map(p => <AddedPosts message={p.message} likesCount={p.likesCount} />)
  return (
    <section>
      <div className="posts">
        <div className="posts__header">My posts</div>
        <div className="posts__wrapper">
          <textarea name="" id="" cols="30" rows="10" width="100%"></textarea>
          <button className="posts_send-btn" type="submit">отправить</button>
        </div>
      </div>
      {postElements}
    </section >
  )
}

export default MakePosts;
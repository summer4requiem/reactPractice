import React from 'react';

const Post = (props) => (


  <div className="post">
    <img className="post_img" src="https://i.pinimg.com/originals/46/da/e5/46dae512e375bee2664a025507da8795.jpg" alt="" width="50" height="50" />
    <div className="post__rating">{props.message}
      <div>likes {props.like}</div>
    </div>
  </div>
);

export default Post;



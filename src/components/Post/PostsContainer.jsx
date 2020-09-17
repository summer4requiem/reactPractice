import React from 'react';
import { addPostActionCreater, updateNewPostText } from '../../Redux/profile-reducer';
import MakePosts from './MakePosts';



const PostsContainer = (props) => {
  let state = props.store.getState();

  let onPostsSendBtn = () => {
    props.store.dispatch(addPostActionCreater());
  }

  let onPostChange = (text) => {
    let action = updateNewPostText(text);
    props.store.dispatch(action);
  }

  return (
    <MakePosts updateNewPostText={onPostChange} addPost = {onPostsSendBtn} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
  )
};

export default PostsContainer; 
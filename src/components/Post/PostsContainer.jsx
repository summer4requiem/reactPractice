import React from 'react';
import { addPostActionCreater, updateNewPostText } from '../../Redux/profile-reducer';
import MakePosts from './MakePosts';
import StoreContext from '../../StoreContext';



const PostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();

        let onPostsSendBtn = () => {
          store.dispatch(addPostActionCreater());
        }

        let onPostChange = (text) => {
          let action = updateNewPostText(text);
          store.dispatch(action);
        }
        return <MakePosts
            updateNewPostText={onPostChange}
            addPost={onPostsSendBtn}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
      }
    }
    </StoreContext.Consumer>
  )
}

export default PostsContainer; 
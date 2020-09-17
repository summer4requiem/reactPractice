import React from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import PostsContainer from '../Post/PostsContainer';

const Profile = (props) => {
  return (
    <section className="content" >
      <ProfileInfo />
      <PostsContainer store={props.store} />
    </section >
  )
}
export default Profile;
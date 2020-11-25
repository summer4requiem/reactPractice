import React from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import PostsContainer from '../Post/PostsContainer';
 
const Profile = (props) => {
  return (
    <section className="content">
      <ProfileInfo profile={props.profile} setUserProfile = {props.getProfileThunkCreator} />
      <PostsContainer profile={props.profile} store={props.store} />
    </section>
  )
}
export default Profile;

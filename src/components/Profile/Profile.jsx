import React from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import PostsContainer from '../Post/PostsContainer';
 
const Profile = (props) => {
  debugger;
  return (
    <section className="content">
      <ProfileInfo profile={props.profile} setUserProfile = {props.setUserProfile} />
      <PostsContainer profile={props.profile} store={props.store} />
    </section>
  )
}
export default Profile;

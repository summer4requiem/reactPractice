import React from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import PostsContainer from '../Post/PostsContainer';

const Profile = (props) => {
  return (
    <section className="content">
      <ProfileInfo  updateUserStatus = {props.updateUserStatus}  status = {props.status}  profile={props.profile} setUserProfile={props.getProfile}/>
      <PostsContainer profile={props.profile} store={props.store} />
    </section>
  )
}
export default Profile;

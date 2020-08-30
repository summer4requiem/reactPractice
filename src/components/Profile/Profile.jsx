import React from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MakePosts from '../Post/MakePosts';


const Profile = (props) => (
  <section  className="content" >
    <ProfileInfo />
    <MakePosts posts={props.state.posts} />
  </section >
)

export default Profile;
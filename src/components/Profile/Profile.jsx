import React from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MakePosts from '../Post/MakePosts';


const Profile = (props) => {
  return (
    <section className="content" >
      <ProfileInfo />
      <MakePosts newPostText={props.state.newPostText} posts={props.state.posts} dispatch={props.dispatch} />
    </section >
  )
}
export default Profile;
import React from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MakePosts from '../Post/MakePosts';


const Profile = (props) => {
  return (
    <section  className="content" >
      <ProfileInfo />
      <MakePosts posts={props.state.posts}  addPost = {props.addPost} updatePostFieldText= {props.updatePostFieldText}/>
    </section >
  )
}
export default Profile;
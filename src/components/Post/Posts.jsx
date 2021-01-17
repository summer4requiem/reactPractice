import React from 'react';
import AddedPosts from "./AddedPosts";
import s from "./Post.module.css";
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLength15 } from '../../utills/validation/validation';
import { Textarea } from '../FormsControls/formsControls';

const FormPost = (props) => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <label className={s.postsHeader} htmlFor="post">My posts</label>
      <Field validate={[requiredField, maxLength15]} component={Textarea} name="post" id="post" />
      <button className={s.postsSendBtn} type="submit">post</button>
    </form>
  </div>
);

const Posts = (props) => {
  let postElements = props.posts.map(p => <AddedPosts message={p.message} key={p.id} likesCount={p.likesCount} />);
  let addPost = (value) => {
    props.addPost(value.post);
  }

  return (
    <div className={s.posts}>
      <div className={s.postsWrapper}>
        <ReduxAddPostForm onSubmit={addPost} />
      </div>
      { postElements}
    </div>
  )
};

const ReduxAddPostForm = reduxForm({ form: `Posts` })(FormPost);
export default Posts;

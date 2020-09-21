import { connect } from 'react-redux';
import { addPostActionCreater, updateNewPostText } from '../../Redux/profile-reducer';
import MakePosts from './MakePosts';


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => 
    {
      dispatch(updateNewPostText(text));
    },
    addPost: ()=> dispatch(addPostActionCreater()),
  }
}


const SPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MakePosts);

export default SPostsContainer; 
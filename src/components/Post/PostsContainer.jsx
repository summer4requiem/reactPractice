import {connect} from 'react-redux';
import {addPost, updateNewPostText} from '../../Redux/profile-reducer';
import MakePosts from './MakePosts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profileSmallPhoto: state.profile,
    }
}

const PostsContainer = connect(mapStateToProps, {
    updateNewPostText,
    addPost,
})(MakePosts);

export default PostsContainer;

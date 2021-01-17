import {connect} from 'react-redux';
import { compose } from 'redux';
import {addPost} from '../../Redux/profile-reducer';
import Posts from './Posts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profileSmallPhoto: state.profile,
    }
}

export default compose(
    connect(mapStateToProps, {
        addPost,
    })
)(Posts);


import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import {
    follow,
    unfollow,
    getUsersThunkCreator,
    getUnFollowThunkCreator,
    getFollowThunkCreator,
    changePageThunkCreator
} from '../../Redux/users-reducer';
import { compose } from "redux";
import { getPageSize, getAllUsers, getTotalUsersCount, getCurrentPage, getFollowingUserProgress, getIsPageLoading } from '../../Redux/users-selectors';

const mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingUserProgress: getFollowingUserProgress(state),
        isPageLoading: getIsPageLoading(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, getUsersThunkCreator, getUnFollowThunkCreator,
        getFollowThunkCreator, changePageThunkCreator,
    }))
    (UsersAPIComponent);

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

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        currentFollowUsersId: state.usersPage.currentFollowUsersId,
        isPageLoading: state.usersPage.isPageLoading,
    }
}


export default compose(
    connect(mapStateToProps, {
        follow, unfollow, getUsersThunkCreator, getUnFollowThunkCreator,
        getFollowThunkCreator, changePageThunkCreator,
    }))
    (UsersAPIComponent);

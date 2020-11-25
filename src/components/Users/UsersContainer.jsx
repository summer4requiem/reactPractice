import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import {
    follow,
    unfollow,
    setUsers,
    // changeCurrentPage,
    setTotalCount,
    toggleFetching,
    getUsersThunkCreator,
    getUnFollowThunkCreator,
    getFollowThunkCreator,
    changePageThunkCreator
} from '../../Redux/users-reducer';

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

const UsersContainer = connect(mapStateToProps, {
    // mapDispatchToProps
    follow: follow,
    unfollow: unfollow,
    setUsers: setUsers,
    // changePage: changeCurrentPage,
    setTotalCount: setTotalCount,
    toggleFetching: toggleFetching,
    getUsersThunkCreator: getUsersThunkCreator,
    getUnFollowThunkCreator: getUnFollowThunkCreator,
    getFollowThunkCreator: getFollowThunkCreator,
    changePageThunkCreator,
})(UsersAPIComponent);
export default UsersContainer;

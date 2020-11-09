import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import { follow, unfollow, setUsers, changeCurrentPage, setTotalCount, isFetching } from '../../Redux/users-reduser';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}


const UsersContainer = connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow,
    setUsers: setUsers,
    changePage: changeCurrentPage,
    setTotalCount: setTotalCount,
    isFetching: isFetching,
})(UsersAPIComponent);
export default UsersContainer;

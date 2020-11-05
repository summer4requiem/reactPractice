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

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => { dispatch(followAC(userID)) },
//         unfollow: (userID) => { dispatch(unfollowAC(userID)) },
//         setUsers: (users) => { dispatch(setUsersAC(users)) },
//         changePage: (currentPage) => { dispatch(changeCurrentPageAC(currentPage)) },
//         setTotalCount: (count) => { dispatch(setTotalCountAC(count)) },
//         toggleFetch: (isFetching) => { dispatch(isFetchingAC(isFetching)) }
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow,
    setUsers: setUsers,
    changePage: changeCurrentPage,
    setTotalCount: setTotalCount,
    isFetching: isFetching,
})(UsersAPIComponent);
export default UsersContainer;

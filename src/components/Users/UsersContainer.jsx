import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import { followAC, unfollowAC, setUsersAC, changeCurrentPageAC, setTotalCountAC } from '../../Redux/users-reduser';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => { dispatch(followAC(userID)) },
        unfollow: (userID) => { dispatch(unfollowAC(userID)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        changePage: (currentPage) => { dispatch(changeCurrentPageAC(currentPage)) },
        setTotalCount: (count) => { dispatch(setTotalCountAC(count))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersContainer;

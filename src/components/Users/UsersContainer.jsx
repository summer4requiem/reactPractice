import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC } from '../../Redux/users-reduser';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => { dispatch(followAC(userID))},
        unfollow: (userID) => { dispatch(unfollowAC(userID))},
        setUsers: (users) => { dispatch(setUsersAC(users))},
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;

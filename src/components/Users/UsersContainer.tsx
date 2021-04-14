import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import { getUsersThunkCreator, unFollowUser, followUser, changePageThunkCreator, } from '../../Redux/users-reducer';
import { compose } from "redux";
import { getPageSize, getAllUsers, getTotalUsersCount, getCurrentPage, getFollowingUserProgress, getIsPageLoading } from '../../Redux/users-selectors';
import { AppStateType } from "../../Redux/redux-store";
import { UserTypes } from "../../types/types";

type mapStateToPropsType = {
    currentPage: number,
    pageSize: number,
    isPageLoading: boolean,
    totalUsersCount: number,
    users: Array<UserTypes>,
    followingUserProgress: Array<number>,
}

type mapDispatchPropsType = {
    followUser: () => void,
    unFollowUser: () => void,
    getUsersThunkCreator: (pageSize: number, currentPage: number) => void;
    changePageThunkCreator: (pageNumber: number, pageSize: number) => void;
}

type mapOwnPropsType = {
    pageTitle: string
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
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
    connect<mapStateToPropsType, mapDispatchPropsType, mapOwnPropsType, AppStateType>(
        mapStateToProps, 
     // @ts-ignore
        {getUsersThunkCreator, followUser, unFollowUser, changePageThunkCreator,// @ts-ignore
    }))(UsersAPIComponent);

import React from 'react';
import Users from './Users';
import Preloader from './preloader';
import { UserTypes } from '../../types/types';

type PropsTypes = {
    currentPage: number,
    pageSize: number,
    getUsersThunkCreator: (pageSize: number, currentPage: number) => void;
    changePageThunkCreator: (pageNumber: number, pageSize: number) => void;
    isPageLoading: boolean,
    totalUsersCount: number,
    followUser: ()=> void,
    unFollowUser: ()=> void,
    users: Array<UserTypes>,
    followingUserProgress: Array<number>,
}

class UsersAPIComponent extends React.Component<PropsTypes> {
    componentDidMount() {
        let { currentPage, pageSize } = this.props;
        this.props.getUsersThunkCreator(currentPage, pageSize);
    }

    changePageOnClick = (pageNumber:number) => {
        let { pageSize } = this.props;
        this.props.changePageThunkCreator(pageNumber,pageSize);
    }

    render() {
        return <>
            { this.props.isPageLoading ?
                <Preloader />
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                changePageOnClick={this.changePageOnClick}
                followingUserProgress={this.props.followingUserProgress}
                follow={this.props.followUser}
                unfollow={this.props.unFollowUser}
                currentPage = {this.props.currentPage}
            />
        </>
    }
}

export default UsersAPIComponent;

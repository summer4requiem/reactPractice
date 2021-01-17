import React from 'react';
import Users from './Users';
import Preloader from './preloader';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    changePageOnClick = (pageNumber) => {
        this.props.changePageThunkCreator(this.props.pageSize, pageNumber);
    }

    render() {
        console.log(`render users`);
        return <>
            { this.props.isPageLoading ?
                <Preloader/>
                : null }
            <Users totalUsersCount={ this.props.totalUsersCount }
                   pageSize={ this.props.pageSize }
                   users={ this.props.users }
                   unfollow={ this.props.unfollow }
                   follow={ this.props.follow }
                   changePageOnClick={ this.changePageOnClick }
                   followingUserProgress={ this.props.followingUserProgress }
                   getUnFollowThunkCreator = {this.props.getUnFollowThunkCreator}
                   getFollowThunkCreator = {this.props.getFollowThunkCreator}
            />
        </>
    }
}

export default UsersAPIComponent;

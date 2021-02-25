import React from 'react';
import Users from './Users';
import Preloader from './preloader';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsersThunkCreator(currentPage, pageSize);
    }

    changePageOnClick = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.changePageThunkCreator(pageSize, pageNumber);
    }

    render() {
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

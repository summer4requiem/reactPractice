import React from 'react';
import Users from './Users'
import * as axios from 'axios'
import Preloader from './preloader';


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.isFetching(true);
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                {
                    withCredentials: true,
                }).then(response => {
                    this.props.isFetching(false);
                    this.props.setTotalCount(response.data.totalCount);
                    this.props.setUsers(response.data.items);
                });
        }
    }

    changePageOnClick = (pageNumber) => {
        this.props.isFetching(true);
        this.props.changePage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.isFetching(false);
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <>
            { this.props.isFetching ?
                <Preloader />
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                changePageOnClick={this.changePageOnClick}
            />
        </>
    }
}

export default UsersAPIComponent;

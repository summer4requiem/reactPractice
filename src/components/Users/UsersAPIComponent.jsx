import React from 'react';
import Users from "./Users"
import * as axios from 'axios'


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setTotalCount(response.data.totalCount);
                this.props.setUsers(response.data.items)
            });
        }
    }

    changePageOnClick = (pageNumber) => {
        this.props.changePage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            console.log(response.data.totalCount);
        });
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users = {this.props.users}
            unfollow = {this.props.unfollow}
            follow = {this.props.follow}
            changePageOnClick = {this.changePageOnClick}
        />
    }
}

export default UsersAPIComponent;
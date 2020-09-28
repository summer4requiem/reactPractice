import React from 'react';
import s from "./Users.module.css"
import * as axios from 'axios'
import imgNone from '/Users/summer_requiem/Dev/my-app/src/components/Users/default-avatar-profile-icon-vector-18942381.jpg'

class Users extends React.Component {
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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        console.log(pagesCount);
        let pages = [];

        for (let index = 1; index <= pagesCount; index++) {
            pages.push(index);
        };

        return <section className={s.users}>
            <ol className={s.usersPaginationList}>
                {pages.map((p) => <li onClick={()=>{this.changePageOnClick(p)}} className={this.props.currentPage === p ? s.activePage : s.userListItem}>{p}</li>)}
            </ol>
            <h1 className={s.pageTitle}>Friends</h1><div className={s.usersWrapper}>
                {
                    this.props.users.map(u =>
                        <div key={u.id} className={s.userInfo}>
                            <div className={s.userAvatar}>
                                <img src={u.photos.small !== null ? u.photos.small : imgNone} alt="Avatar" />
                                <div className={s.userBio}>
                                    <ul className={s.userBioList}>
                                        <li className={s.userBioListItem}>{u.stats}</li>
                                        <li className={s.userBioListItem}>{u.name}</li>
                                        {/* <li className={s.userBioListItem}>{u.location.country} {u.location.city}</li> */}
                                    </ul>
                                    {u.isFollowed ? <button onClick={() => this.props.unfollow(u.id)} className={s.follow}>follow</button>
                                        :
                                        <button onClick={() => this.props.follow(u.id)} className={s.unfollow}>unfollow</button>}
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </section>
    }
}

export default Users;
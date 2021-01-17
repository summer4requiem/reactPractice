import React from 'react';
import s from "./Users.module.css"
import imgNone
from '/Users/summer_requiem/Dev/my-app/src/components/Users/default-avatar-profile-icon-vector-18942381.jpg'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let index = 1; index <= pagesCount; index++) {
        pages.push(index);
    }
    return <section className={s.users}>
        <ol className={s.usersPaginationList}>
            {pages.map((p) => <li onClick={() => {
                props.changePageOnClick(p)
            }} className={props.currentPage === p ? s.activePage : s.userListItem}>{p}</li>)}
        </ol>
        <h1 className={s.pageTitle}>Friends</h1>
        <div className={s.usersWrapper}>
            {
                props.users.map(u =>
                    <div key={u.id} className={s.userInfo}>
                        <div className={s.userAvatar}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small !== null ? u.photos.small : imgNone} alt="Avatar" />
                            </NavLink>
                            <div className={s.userBio}>
                                <ul className={s.userBioList}>
                                    <li className={s.userBioListItem}>{u.stats}</li>
                                    <li className={s.userBioListItem}>{u.name}</li>
                                </ul>
                                {u.isFollowed ?
                                    <Button variant="contained"  disabled={props.followingUserProgress.some(id => id === u.id)}
                                        className={s.unfollow} onClick={() => {
                                            props.getUnFollowThunkCreator(u.id);
                                        }}>unfollow</Button> :
                                    <Button color="primary" variant="contained" disabled={props.followingUserProgress.some(id => id === u.id)}
                                        className={s.follow} onClick={() => {
                                            props.getFollowThunkCreator(u.id);
                                        }}>follow</Button>}
                            </div>
                        </div>
                    </div>)
            }
        </div>
    </section>
};

export default Users;

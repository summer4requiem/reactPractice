import React from 'react';
import s from "./Users.module.css"
import imgNone from '/Users/summer_requiem/Dev/my-app/src/components/Users/default-avatar-profile-icon-vector-18942381.jpg'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let index = 1; index <= pagesCount; index++) {
        pages.push(index);
    }

    return <section className={s.users}>
        <ol className={s.usersPaginationList}>
            {pages.map((p) => <li onClick={() => { props.changePageOnClick(p) }} className={props.currentPage === p ? s.activePage : s.userListItem}>{p}</li>)}
        </ol>
        <h1 className={s.pageTitle}>Friends</h1><div className={s.usersWrapper}>
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
                                {u.isFollowed ? <button onClick={() =>
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                     {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': `63833407-6dd6-4311-aa68-fc403e60b1a9`
                                        },
                                    }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })
                                }className={s.follow}>follow</button> :

                                    <button onClick={() =>
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': `63833407-6dd6-4311-aa68-fc403e60b1a9`
                                                }
                                            }).then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                            })
                                    }className={s.unfollow}>unfollow</button>}
                            </div>
                        </div>
                    </div>)
            }
        </div>
    </section >
};

export default Users;

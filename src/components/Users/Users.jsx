import React from 'react';
import s from "./Users.module.css"
import imgNone from '/Users/summer_requiem/Dev/my-app/src/components/Users/default-avatar-profile-icon-vector-18942381.jpg'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let index = 1; index <= pagesCount; index++) {
        pages.push(index);
    };

    return <section className={s.users}>
        <ol className={s.usersPaginationList}>
            {pages.map((p) => <li onClick={() => { props.changePageOnClick(p) }} className={props.currentPage === p ? s.activePage : s.userListItem}>{p}</li>)}
        </ol>
        <h1 className={s.pageTitle}>Friends</h1><div className={s.usersWrapper}>
            {
                props.users.map(u =>
                    <div key={u.id} className={s.userInfo}>
                        <div className={s.userAvatar}>
                            <img src={u.photos.small !== null ? u.photos.small : imgNone} alt="Avatar" />
                            <div className={s.userBio}>
                                <ul className={s.userBioList}>
                                    <li className={s.userBioListItem}>{u.stats}</li>
                                    <li className={s.userBioListItem}>{u.name}</li>
                                    {/* <li className={s.userBioListItem}>{u.location.country} {u.location.city}</li> */}
                                </ul>
                                {u.isFollowed ? <button onClick={() => props.unfollow(u.id)} className={s.follow}>follow</button>
                                    :
                                    <button onClick={() => props.follow(u.id)} className={s.unfollow}>unfollow</button>}
                            </div>
                        </div>
                    </div>)
            }
        </div>
    </section>
};

export default Users;
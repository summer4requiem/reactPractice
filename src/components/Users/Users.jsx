import React from 'react';
import s from "./Users.module.css"
import * as axios from 'axios'
import imgNone from '/Users/summer_requiem/Dev/my-app/src/components/Users/default-avatar-profile-icon-vector-18942381.jpg'


const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            props.setUsers(response.data.items)
        });
    }
    return <section className={s.users}><h1 className={s.pageTitle}>Friends</h1><div className={s.usersWrapper}>
        {
            props.users.map(u =>
                <div key={u.id} className={s.userInfo}>
                    <div className={s.userAvatar}>
                        <img  src={u.photos.small !== null ? u.photos.small: imgNone} alt="Avatar" />
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

}



export default Users;
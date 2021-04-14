import React from 'react';
import s from "./Users.module.css"
import imgNone
from '/Users/summer_requiem/Dev/my-app/src/components/Users/default-avatar-profile-icon-vector-18942381.jpg'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paginator from './Paginator';
import { UserTypes } from '../../types/types';

type PropsTypes = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    changePageOnClick: (pageNumber: number) => void,
    users: Array<UserTypes>,
    followingUserProgress: Array<number>
    unfollow:(userId:number)=> void,
    follow:(userId:number)=> void,
}

const Users: React.FC<PropsTypes> = (props) => {
    return <section>
        <Paginator currentPage={props.currentPage} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} changePageOnClick={props.changePageOnClick} />
        <h1 className={s.pageTitle}>Friends</h1>
        <div className={s.usersWrapper}>
            {
                props.users.map(u =>
                    <div key={u.id} className={s.userInfo}>
                        <div className={s.userAvatar}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small !== null ? u.photos.small : imgNone} alt="Avatar" />
                            </NavLink>
                            <div>
                                <ul>
                                    <li className={s.userBioListItem}>{u.status}</li>
                                    <li className={s.userBioListItem}>{u.name}</li>
                                </ul>
                                {u.followed ?
                                    <Button variant="contained" disabled={props.followingUserProgress.some(id => id === u.id)}
                                        className={s.unfollow} onClick={() => {
                                            props.unfollow(u.id);
                                        }}>unfollow</Button> :
                                    <Button color="primary" variant="contained" disabled={props.followingUserProgress.some(id => id === u.id)}
                                        className={s.follow} onClick={() => {
                                            props.follow(u.id);
                                        }}>follow</Button>}
                            </div>
                        </div>
                    </div>)
            }
        </div>
    </section>
};

export default Users;

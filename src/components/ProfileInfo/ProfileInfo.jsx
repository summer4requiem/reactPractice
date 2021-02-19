import React from 'react';
import Preloader from '../Users/preloader';
import s from "./Profile.module.css"
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    debugger;
    props.setUserProfile(props.profile);
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <section className={ s.description }>
            <div className={ s.descriptionBlock }>
                <h1 className={ s.descriptionHeader }>{ props.profile.fullName }</h1>
                <div className={s.descriptionWrapper}>
                    <ul className={ s.descriptionImg }>
                    {/* <ProfileStatusWithHooks/> */}
                        <ProfileStatusWithHooks status = {props.status} setStatus = {props.setStatus} updateUserStatus = {props.updateUserStatus} />
                        <li className={ s.descriptionListItem }><img src={ props.profile.photos.large || props.profile.photos.small } width="200px" height="220px" alt=""/></li>
                    </ul>
                    <ul className={ s.contactsList }>
                        <li className={s.contactsListItem }>date of birth: 4 june 1996</li>
                        <li className={ s.contactsListItem }>city: Saint-Petersburg</li>
                        <li className={ s.contactsListItem }>Web-site:</li>
                        <li className={ s.contactsListItem }>{ props.profile.contacts.facebook }</li>
                        <li className={ s.contactsListItem }>{ props.profile.contacts.twitter }</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProfileInfo;

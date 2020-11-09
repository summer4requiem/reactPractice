import React from 'react';
import s from "./Profile.module.css"

const ProfileInfo = (props) => {
    props.setUserProfile(props.profile);
    if (!props.profile) {

        return (
            <div>Загрузка...</div>
        )
    }
    return (
        <section className={ s.description }>
            <div className={ s.descriptionBlock }>
                <h1 className={ s.descriptionHeader }>{ props.profile.fullName }</h1>
                <div className={s.descriptionWrapper}>
                    <ul className={ s.descriptionImg }>
                        <li className={ s.descriptionListItem }>{ props.profile.aboutMe }</li>
                        <li className={ s.descriptionListItem }><img src={ props.profile.photos.large } width="200px" height="220px" alt=""/></li>
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

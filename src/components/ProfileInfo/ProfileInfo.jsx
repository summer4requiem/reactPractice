import React from 'react';
import s from "./Profile.module.css"

const ProfileInfo = () => (
  <section className={s.description}>
    {/* <div className={s.descriptionImg}>
      <img src="https://images.unsplash.com/photo-1495539406979-bf61750d38ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" width="100%" height="auto" />
    </div> */}
    <div className={s.descriptionBlock}>
      <h1 className={s.descriptionHeader}>Agata Ageeva</h1>
      <ul className={s.descriptionList}>
        <li className={s.descriptionListItem}><img src="https://sun9-12.userapi.com/c855524/v855524471/75883/Q_Zc64myPYY.jpg"  width="150px"  height="100px" alt=""/></li>
        <li className={s.descriptionListItem}>date of birdth: 4 june 1996</li>
        <li className={s.descriptionListItem}>city: Saint-Petersburg</li>
        <li className={s.descriptionListItem}>Web-site: </li>
      </ul>
    </div>
  </section>
)

export default ProfileInfo;
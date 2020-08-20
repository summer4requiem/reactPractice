import React from 'react';

const Profile = () => (
    <section className="content">
    <div className="content__img">
      <img src="https://i.pinimg.com/originals/46/da/e5/46dae512e375bee2664a025507da8795.jpg" alt="" width="100" height="80" />
    </div>
    <h1 className="content__header">Agata Ageeva</h1>
    <ul className="content__list">
      <li className="content__list-items">date of birdth: 4 june 1996</li>
      <li className="content__list-items">city: Saint-Petersburg</li>
      <li className="content__list-items">Web-site: </li>
    </ul>
    <div className="posts">
      <div className="posts__header">My posts</div>
      <div className="posts__wrapper">
        <textarea name="" id="" cols="30" rows="10" width="100%"></textarea>
        <button className="posts_send-btn" type="submit">отправить</button>
      </div>
    </div>
  </section>
)

export  default Profile;
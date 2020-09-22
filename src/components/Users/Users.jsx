import React from 'react';
import s from "./Users.module.css"


const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([{
            id: 1676767,
            stats: 'Hi, there',
            name: 'Lada Svetlakova',
            isFollowed: true,
            avatar: 'https://sun9-61.userapi.com/impg/VE4TBsVJBCDb9x4KLbojK4UfaGJegJ5wrU8i2g/pKvUwdfUXBE.jpg?size=400x0&quality=90&crop=90,240,1405,1405&sign=ebadfff21e4eb4d75f3fe73f845e8931&ava=1',
            location: {
                country: 'Russia',
                city: 'Saint Petersburg',
            }
        },
        {
            id: 1667,
            stats: 'Hi, there',
            name: 'Artik Mangasaryan',
            isFollowed: false,
            avatar: 'https://sun9-53.userapi.com/impg/AkJziSEDX8Z36Ay2ta6Q-7uA-XVTlvSUOtyh2Q/iaA53Q02158.jpg?size=400x0&quality=90&crop=487,0,1285,1920&sign=fd2ff926f2ff23e530eb294c50e9331b&ava=1',
            location: {
                country: 'Germany',
                city: 'Broelw',
            }
        },
        {
            id: 1467,
            stats: 'Hi, there',
            name: 'Yana Valeeva',
            isFollowed: true,
            avatar: 'https://sun9-50.userapi.com/impg/c858416/v858416776/21ee66/g06L38XynQQ.jpg?size=400x0&quality=90&crop=0,0,960,960&sign=b1cdfb53db4ccfaa5a83f1de58c7d0bf&ava=1',
            location: {
                country: 'Russia',
                city: 'Sochi',
            }
        },
        {
            id: 11167,
            stats: 'Hi, there',
            name: 'Roman Smirnov',
            isFollowed: false,
            avatar: 'https://sun9-28.userapi.com/c856032/v856032077/bcc7d/QA3-JlWhNCM.jpg',
            location: {
                country: 'USA',
                city: 'Brucklin',
            }
        },
        ]);
    }
    return <section className={s.users}><h1 className={s.pageTitle}>Friends</h1><div className={s.usersWrapper}>
        {
            props.users.map(u =>
                <div key={u.id} className={s.userInfo}>
                    <div className={s.userAvatar}>
                        <img src={u.avatar} alt="Avatar" />
                        <div className={s.userBio}>
                            <ul className={s.userBioList}>
                                <li className={s.userBioListItem}>{u.stats}</li>
                                <li className={s.userBioListItem}>{u.name}</li>
                                <li className={s.userBioListItem}>{u.location.country} {u.location.city}</li>
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
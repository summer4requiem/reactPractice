import React from 'react';
import s from "./Music.module.css"

const Music = () => (
    <section className={s.music}>
        <h1>Музыкальный каталог</h1>
        <div className={s.musicCharts}>Песни</div>
        <div className={s.dialogMessage}>Диалоги</div>
    </section>
);

export default Music;
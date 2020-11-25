import React from 'react';
import s from "./Login.module.css"

const Login = () => (
    <section className={s.login}>
        <h1>Страница пользователя</h1>
        <div className={s.dialogMessage}>Диалоги</div>
    </section>
);

export default Login;
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from "./Login.module.css";
import {AuthAPI} from ".././../API/api"

const LoginForm = (props) => {
    console.log('rerender');
    return (
        <form onSubmit={props.handleSubmit}>
            <h1>Sign in / Sign out</h1>
            <fieldset className={s.loginFormFieldset}>
                <div className={s.loginFieldWrapper}>
                    <label className={s.loginLabel} htmlFor="email">Login</label>
                    <Field placeholder="login" id="email"  className={s.loginInput} name="email" component={"input"} />
                </div>
                <div className={s.loginFieldWrapper}>
                    <label className={s.loginLabel} htmlFor="password">Password</label>
                    <Field className={s.loginInput} id="password" type="password" name="password" component={"input"} />
                </div>
            </fieldset>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={"input"} />
                <label htmlFor="">remember me</label>
            </div>
            <button className={s.logInButton} type="submit">Login</button>
        </form >
    );
}

const ReduxLoginForm = reduxForm({ form: `login` })(LoginForm);
const Login = () => {
    let onSubmit = (FormData) => {
        console.log(FormData);
        AuthAPI.logIn(FormData.email, FormData.password, FormData.rememberMe, true);
    }
    return (
        <section className={s.login}>
            <ReduxLoginForm onSubmit={onSubmit} />
        </section>
    )
}

export default Login;
import React from 'react';
import s from './formControl.module.css'
import TextField from '@material-ui/core/TextField';

export const Textarea = ({ input, meta: { touched, error } }) => {
    const isError = error && touched;
    return (
        <>
            { isError && <span className={s.errorMessage}>{error}</span>}
            <div className={`${s.formControl} ${isError ? s.error : ``}`}>
            <TextField
                variant="outlined"
                    id="standard-password-input"
                    label="Login"
                    type="email"
                    autoComplete="current-email"
                    {...input}
                />
                {/* <textarea {...input} placeholder="" name="" id="" cols="30" rows="10" /> */}
            </div>
        </>
    )
}

export const LoginInput = ({ input, meta: { touched, error } }) => {
    const isError = error && touched;
    return (
        <>
            { isError && <span className={s.errorMessage}>{error}</span>}
            <div className={`${s.formControl} ${isError ? s.error : ``}`}>
            <TextField
                variant="outlined"
                    id="standard-email-input"
                    label="Login"
                    type="email"
                    autoComplete="current-email"
                    {...input}
                />
            </div>
        </>
    )
}

export const PasswordInput = ({ input, meta: { touched, error } }) => {
    const isError = error && touched;
    return (
        <>
            { isError && <span className={s.errorMessage}>{error}</span>}
            <div className={`${s.formControl} ${isError ? s.error : ``}`}>
                <TextField
                variant="outlined"
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    {...input}
                />
            </div>
        </>
    )
}

import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./Login.module.css";
import { LoginInput, PasswordInput } from "../FormsControls/formsControls";
import { requiredField, email } from "../../utills/validation/validation";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { FormControlLabel } from "@material-ui/core";
import { connect } from "react-redux";
import { LoginTC } from "../../Redux/app-reducer";
import { Redirect } from "react-router-dom";
// import { CheckBox } from "./CheckBox";
// import { CheckBox } from '@material-ui/core/CheckBox';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h1>Sign in / Sign out</h1>
      <fieldset className={s.loginFormFieldset}>
        <div className={s.loginFieldWrapper}>
          <Field
            validate={[email, requiredField]}
            placeholder="email address"
            id="email"
            name="email"
            component={LoginInput}
          />
        </div>
        <div className={s.loginFieldWrapper}>
          <Field
            validate={[requiredField]}
            className={s.loginInput}
            id="password"
            type="password"
            name="password"
            component={PasswordInput}
          />
        </div>
      </fieldset>
      <div>
        <FormControlLabel
          control={
            <Field type="checkbox" name={"rememberMe"} component={"input"} />
          }
          label="Remember me"
        />
      </div>
      {props.error && <div className={"common_form_error"}>{props.error}</div>}
      <Button
        startIcon={<SaveIcon />}
        size="large"
        variant="contained"
        color="primary"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: `login` })(LoginForm);
const Login = (props) => {
  let onSubmit = (FormData) => {
    props.LoginTC(FormData.email, FormData.password, FormData.rememberMe, true);
  };

  if (props.isAuth) {
    return <Redirect to="/profile"></Redirect>;
  }

  return (
    <section className={s.login}>
      <ReduxLoginForm onSubmit={onSubmit} />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.app.isAuth,
  };
};

export default connect(mapStateToProps, { LoginTC })(Login);

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsFotAuth = (state) => {
    return {
        isAuth: state.app.isAuth,
    }
}

// с аутентификационным редиректом
export const AuthRedirectComponent = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to = "/login/" /> 
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsFotAuth)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
}
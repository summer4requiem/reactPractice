import React from "react";
import Header from './Header';
import { connect } from "react-redux";
import {LogOut } from '../../Redux/app-reducer';
import { compose } from "redux";
import { withRouter } from 'react-router-dom';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.app.isAuth,
  login: state.app.login,
});

export default compose(withRouter(connect(mapStateToProps, {LogOut })(HeaderContainer)));

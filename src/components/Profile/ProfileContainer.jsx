import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile, getProfileStatus, updateUserStatus } from "../../Redux/profile-reducer";
import { withRouter } from 'react-router-dom';
import { AuthRedirectComponent } from '../HOC/AuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.currentUserUserId;
            if (!userId) {
                this.props.history.push("./login");
            }
        }
        this.props.getProfile(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        currentUserUserId: state.app.userId,
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, getProfileStatus, updateUserStatus }),
    AuthRedirectComponent,
    withRouter,
)(ProfileContainer);


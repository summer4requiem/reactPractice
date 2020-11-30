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
            userId = 12420;
        }
        this.props.getProfile(userId);
        // setTimeout(()=> 
        this.props.getProfileStatus(userId)
        // , 2000)
       
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
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, getProfileStatus, updateUserStatus }),
    AuthRedirectComponent,
    withRouter,
)(ProfileContainer);


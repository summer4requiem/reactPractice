import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileThunkCreator } from "../../Redux/profile-reducer";
import { withRouter } from 'react-router-dom';
import { AuthRedirectComponent } from '../HOC/AuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfileThunkCreator(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose(
    connect(mapStateToProps, { getProfileThunkCreator }),
    AuthRedirectComponent,
    withRouter,
)(ProfileContainer);


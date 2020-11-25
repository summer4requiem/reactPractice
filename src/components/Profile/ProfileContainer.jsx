import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileThunkCreator } from "../../Redux/profile-reducer";
import { withRouter } from 'react-router-dom';
import { AuthRedirectComponent } from '../HOC/AuthRedirect';

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
            <Profile {...this.props} />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

let WithAuthRedirectComponent = AuthRedirectComponent(ProfileContainer);

let WidthUrlDataContainerComponent = withRouter(WithAuthRedirectComponent);
export default connect(mapStateToProps, { getProfileThunkCreator })(WidthUrlDataContainerComponent);

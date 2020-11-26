import React from 'react';
import s from "./Profile.module.css"

class ProfileStatus extends React.Component {
    state = {
        idEditMode: false
    }
    activateEditMode() {
        this.setState({
            idEditMode: true
        });
    }

    deActivateEditMode() {
        this.setState({
            idEditMode: false
        });
    }

    render() {
        return (
            <>
                {this.state.idEditMode ?
                    <li className={s.description} >
                        <input autoFocus={true} onBlur={() => this.deActivateEditMode()} type="text" value={this.props.status} />
                    </li>
                    :
                    <li className={s.description} onDoubleClick={() => this.activateEditMode()}>
                        <span>{this.props.status}</span>
                    </li>}
            </>
        )
    }
}

export default ProfileStatus;
import React from 'react';
import s from "./Profile.module.css"

class ProfileStatus extends React.Component {
    state = {
        idEditMode: false,
        status: this.props.status, // первоначально хватает статус из пропсов
    }

    activateEditMode = () => {
        this.setState({
            idEditMode: true,
        });
    }

    deActivateEditMode = () => {
        this.setState({
            idEditMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (evt) => {
        let text = evt.target.value;
        this.setState({
            status: text,
        })
    }

    render() {
        return (
            <>
                {this.state.idEditMode ?
                    <li className={s.description} >
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} type="text" value={this.state.status} />
                    </li>
                    :
                    <li className={s.description} onDoubleClick={this.activateEditMode}>
                        <span>{this.state.status || '--no status--'}</span>
                    </li>}
            </>
        )
    }
}

export default ProfileStatus;
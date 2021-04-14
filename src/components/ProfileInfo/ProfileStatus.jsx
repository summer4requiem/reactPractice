import React from 'react';
import s from "./Profile.module.css"

class ProfileStatusClass extends React.Component {
    state = {
        idEditMode: false,
        status: this.props.status,
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

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        return (
            <>
                {this.state.idEditMode ?
                    <li className={s.description} >
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} type="text" value={this.state.status} />
                    </li>
                    :
                    <li className={s.description} onDoubleClick={this.activateEditMode} title={'status_text'}>
                        <span>{this.state.status || '--no status--'}</span>
                    </li>}
            </>
        )
    }
}

export default ProfileStatusClass;

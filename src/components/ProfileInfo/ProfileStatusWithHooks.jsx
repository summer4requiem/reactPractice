import React, { useState } from 'react';
import s from "./Profile.module.css"

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
        props.updateUserStatus(status);
    }

    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTurget)
    }

    return (
        <>
            {editMode &&
                <li >
                    <input className={s.statusEdit} onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} type="text" />
                </li>}
            {!editMode && <li onDoubleClick={activateEditMode}>
                <div className={s.statusStatic}>status</div>
            </li>}
        </>
    )
}

export default ProfileStatusWithHooks;
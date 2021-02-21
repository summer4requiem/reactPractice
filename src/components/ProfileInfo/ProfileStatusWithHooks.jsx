import React, { useState, useEffect } from "react";
import s from "./Profile.module.css";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {editMode && (
        <li>
          <input
            value={status}
            className={s.statusEdit}
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deActivateEditMode}
            type="text"
          />
        </li>
      )}
      {!editMode && (
        <li onDoubleClick={activateEditMode}>
          <div className={s.statusStatic}>
            {props.status || "no status yet"}
          </div>
        </li>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;

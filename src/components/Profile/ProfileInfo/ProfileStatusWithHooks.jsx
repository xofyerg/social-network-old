import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]); // если статус в глобальном state изменился, запускай setStatus

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {"Status: " + props.status || "No status"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status}
            autoFocus={true}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;

import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/profile-picture-not-found.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={styles.users}>
      <div>
        <NavLink to={"/profile/" + user.id}>
          <img
            src={user.photos.small != null ? user.photos.small : userPhoto}
            className={styles.userPhoto}
            alt=""
          />
        </NavLink>
      </div>
      <div>
        <div className={styles.userInfo}>
          <div>{user.name}</div>
          <div className={styles.status}>{user.status}</div>
        </div>
      </div>
      <div>
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

export default User;

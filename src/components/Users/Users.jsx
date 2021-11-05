import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./Users.module.css";

let Users = ({
  onPageChanged,
  currentPage,
  totalUsersCount,
  pageSize,
  users,
  ...props
}) => {
  return (
    <div>
      <div className={styles.people}>People {totalUsersCount}</div>
      <Paginator
        onPageChanged={onPageChanged}
        currentPage={currentPage}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <User
            key={u.id}
            user={u}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;

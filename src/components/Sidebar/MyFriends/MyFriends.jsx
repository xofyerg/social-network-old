import Friend from "./Friend/Friend";
import s from "./MyFriends.module.css";
import { NavLink } from "react-router-dom";

const MyFriends = (props) => {
  let friendsElements = props.friends.map((f) => {
    return <Friend id={f.id} name={f.name} key={f.id}></Friend>;
  });

  return (
    <div className={s.friends}>
      <div className={s.friend}>
        <NavLink to="/friends" activeClassName={s.activeLink}>
          Friends
        </NavLink>
      </div>
      <div className={s.item}>{friendsElements}</div>
    </div>
  );
};

export default MyFriends;

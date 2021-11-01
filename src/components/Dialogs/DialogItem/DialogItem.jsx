import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/dialogs/" + props.id}>
        <img
          src="https://vectorified.com/images/mystery-person-icon-34.jpg"
          alt=""
        />
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;

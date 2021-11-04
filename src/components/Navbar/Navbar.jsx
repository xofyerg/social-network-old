import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import profile from "../../assets/navbar-icons/profile.png";
import dialogs from "../../assets/navbar-icons/dialogs.png";
import users from "../../assets/navbar-icons/users.png";
import news from "../../assets/navbar-icons/news.png";
import music from "../../assets/navbar-icons/music.png";
import settings from "../../assets/navbar-icons/settings.png";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile">
          <img src={profile} alt="" />
          My profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs">
          <img src={dialogs} alt="" />
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users">
          <img src={users} alt="" />
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news">
          <img src={news} alt="" />
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music">
          <img src={music} alt="" />
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings">
          <img src={settings} alt="" />
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

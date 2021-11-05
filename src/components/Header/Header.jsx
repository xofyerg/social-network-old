import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/header-logo.png";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" />

      <div className={styles.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;

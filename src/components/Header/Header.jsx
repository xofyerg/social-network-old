import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://sun9-52.userapi.com/impg/c857524/v857524533/2167b3/A6nkwNuUEko.jpg?size=604x162&quality=96&sign=1dfe8ae8445511431e036d31be0ca46d&type=album"
        alt=""
      />

      <div className={s.loginBlock}>
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

import { logout } from "../../redux/auth-reducer";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props}></Header>;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { logout })(HeaderContainer);

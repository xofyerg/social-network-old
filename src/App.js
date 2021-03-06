import "./App.css";
import React, { Component, Suspense } from "react";
import store from "./redux/redux-store";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Redirect, Route, withRouter } from "react-router-dom";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends Component {
  // catchAllUnhandledErrors = (promiseRejectionEvent) => {
  //   alert("Some error occured");
  //   console.error(promiseRejectionEvent);
  // };

  componentDidMount() {
    this.props.initializeApp();
    // window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  // componentWillUnmount() {
  //   window.removeEventListener(
  //     "unhandledrejection",
  //     this.catchAllUnhandledErrors
  //   );
  // }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <Route path="/" render={() => <Redirect to="/profile" />} />
        <div className="app-wrapper-content">
          <Route
            path="/profile/:userId?"
            render={withSuspense(ProfileContainer)}
          />
          <Route path="/login" render={() => <Login />} />
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route path="/news" render={() => <News />} />
          <Route path="/users" render={() => <UsersContainer />} />
          {/*<Route path="*" render={() => <div>404 NOT FOUND</div>} />*/}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SocialNetworkApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SocialNetworkApp;

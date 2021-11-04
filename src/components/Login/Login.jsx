import { Field, reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import styles from "./../common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {createField("email", Input, [required], "Enter email...")}
        {createField("password", Input, [required], "Enter password...", {
          type: "password",
        })}
        {createField(
          "rememberMe",
          Input,
          null,
          null,
          {
            type: "checkbox",
          },
          "Remember me"
        )}
        {captchaUrl && <img src={captchaUrl} alt="" />}
        {captchaUrl &&
          createField("captcha", Input, [required], "Symbols from image...")}
        <div>
          {error && <div className={styles.formSummaryError}>{error}</div>}
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);

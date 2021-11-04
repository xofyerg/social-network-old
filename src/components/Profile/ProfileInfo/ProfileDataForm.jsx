import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";
import styles from "./ProfileInfo.module.css";
import s from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>{<button onClick={() => {}}>Save</button>}</div>
      <div>{error && <div className={s.formSummaryError}>{error}</div>}</div>
      <div>Full name: {createField("fullName", Input, [], "Full name")}</div>
      <div>
        Looking for a job:
        {createField("lookingForAJob", Input, [], "", { type: "checkbox" })}
      </div>
      <div>
        My professional skills:
        {createField(
          "lookingForAJobDescription",
          Textarea,
          [],
          "My professional skills"
        )}
      </div>
      <div>
        About me:
        {createField("aboutMe", Textarea, [], "About me")}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={styles.contact}>
              {key}: {createField("contacts." + key, Input, [], key)}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({
  form: "edit-profile",
})(ProfileDataForm);

export default ProfileDataFormReduxForm;

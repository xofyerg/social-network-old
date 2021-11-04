import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/profile-picture-not-found.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  isOwner,
  status,
  updateStatus,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = async (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img
          className={styles.mainPhoto}
          src={profile.photos.large || userPhoto}
          alt=""
        />
        {isOwner ? <input type="file" onChange={onMainPhotoSelected} /> : null}
        <div>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>

        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            goToEditMode={() => setEditMode(true)}
          />
        )}
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      <div>{isOwner && <button onClick={goToEditMode}>Edit info</button>}</div>
      <div>Full name: {profile.fullName}</div>
      <div>Looking for a gob: {profile.lookingForAJob ? "yes" : "no"}</div>
      {profile.lookingForAJob && (
        <div>My professional skills: {profile.lookingForAJobDescription}</div>
      )}
      <div>About me: {profile.aboutMe}</div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;

import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/profile-picture-not-found.png";
import changePhoto from "../../../assets/images/change-photo.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

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
    <div className={styles.profileInfo}>
      <div>
        <img
          className={styles.mainPhoto}
          src={profile.photos.large || userPhoto}
          alt=""
        />
        {isOwner ? (
          <div>
            <input
              className={styles.changePhotoInput}
              type="file"
              onChange={onMainPhotoSelected}
              id="input_file"
            />
            <span>
              <label htmlFor="input_file">
                <img
                  className={styles.changePhotoLabel}
                  src={changePhoto}
                  alt=""
                />
              </label>
            </span>
          </div>
        ) : null}
      </div>

      <div>
        <div className={styles.fullName}>{profile.fullName}</div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

        <p>
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
        </p>
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <div>About me:</div> <span>{profile.aboutMe}</span>
        <div>Looking for a job:</div>
        <span>{profile.lookingForAJob ? "yes" : "no"}</span>
        <div>My professional skills:</div>
        {profile.lookingForAJob && (
          <span>{profile.lookingForAJobDescription}</span>
        )}
      </div>
      <div>Contacts:</div>
      <div>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
        <div>
          {isOwner && (
            <button className={styles.changeButton} onClick={goToEditMode}>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      {contactValue ? (
        <div className={styles.contactsBlock}>
          <div>{contactTitle}:</div> <span>{contactValue}</span>
        </div>
      ) : null}
    </div>
  );
};

export default ProfileInfo;

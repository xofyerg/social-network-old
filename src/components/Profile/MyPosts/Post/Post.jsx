import styles from "./Post.module.css";
import userPhoto from "../../../../assets/images/profile-picture-not-found.png";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src={userPhoto} alt="" />
      <span>{props.message}</span>
    </div>
  );
};

export default Post;

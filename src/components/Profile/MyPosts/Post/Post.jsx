import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://vectorified.com/images/mystery-person-icon-34.jpg"
        alt=""
      />
      {props.message}
      <div className={s.itemLike}>Likes {props.likesCount}</div>
    </div>
  );
};

export default Post;

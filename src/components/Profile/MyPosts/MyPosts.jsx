import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={Textarea}
            name="newPostText"
            placeholder="Enter your post text"
            validate={[required, maxLength10]}
          ></Field>
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

let AddNewPostFormRedux = reduxForm({
  form: "ProfileAddNewPostForm",
})(AddNewPostForm);

const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map((p) => {
    return (
      <Post
        id={p.id}
        message={p.message}
        likesCount={p.likesCount}
        key={p.id}
      ></Post>
    );
  });

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;

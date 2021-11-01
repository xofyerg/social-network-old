import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import React from "react";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={Textarea}
            name="newMessageBody"
            placeholder="Enter your message"
            validate={[required, maxLength50]}
          ></Field>
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "dialog-add-message-form",
})(AddMessageForm);

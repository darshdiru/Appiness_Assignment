import React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import "./LoginPage.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function submit(values) {
  return sleep(1000).then(() => {
    if (!"hruday@gmail.com".includes(values.username)) {
      throw new SubmissionError({
        username: "User does not exist",
        _error: "Login failed!",
      });
    } else if (values.password !== "hruday123") {
      throw new SubmissionError({
        password: "Wrong password",
        _error: "Login failed!",
      });
    } else {
      values.username = "";
      values.password = "";
    }
  });
}

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
  ) {
    errors.username = "Must contain a valid email";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label className="control-label">{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className="form-control"
      />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

let LoginPage = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={handleSubmit(submit)}>
          <div className="form-group">
            <Field name="username" component={renderField} label="Username" />
          </div>
          <div className="form-group">
            <Field name="password" component={renderField} label="Pasword" />
          </div>
          <div className="form-group">
            <button
              type="submit"
              disabled={pristine || submitting}
              className="btn btn-primary"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
LoginPage = reduxForm({
  form: "user",
  validate,
  onSubmitSuccess: (result, dispatch, props) => {
    console.log("SUCCESS");
    props.history.push("/employee");
  },
})(LoginPage);

export default LoginPage;

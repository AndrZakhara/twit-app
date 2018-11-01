import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class LoginPage extends Component {
  isFormError() {
    let error = true;
    if(this.props.formError.loginForm !== undefined) {
      const arrError = this.props.formError.loginForm.syncErrors;
      if(arrError !== undefined) error = false;
    }
    return error;
  }

  render() {
    const {
      onSubmit,
      pristine,
    } = this.props;
    return (
      <div>
        <h2>Log In</h2>
        <form onSubmit={onSubmit}>
          <div>
            <Field name="name" component="input" placeholder="username"/>
          </div>
          <div>
            <Field name="password" component="input" type="password" placeholder="password"/>
          </div>
          <div>
            <input
              type="submit"
              value="Log In"
              disabled={this.isFormError() ? pristine : 'disabled'}
            />
          </div>
        </form>
      </div>
    );
  }
}

const validate = ({name, password}) => {
  const errors = {};

  if (!name) errors.name = 'name is required';
  else if (name.length < 3 || name.length > 8) errors.name = 'invalid name';

  if (!password) errors.password = 'password is required';
  else if (password.length > 8 || password.length <= 3 ) errors.password = 'to short';

  return errors;
};

export default reduxForm({
  form: 'loginForm',
  validate,
})(LoginPage)
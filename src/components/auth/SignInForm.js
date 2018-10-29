import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SignInForm extends Component {
  static propTypes = {

  };

  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <Field name="name" component="input" />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" component="input" type="password"/>
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'auth'
})(SignInForm);

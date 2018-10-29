import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class RegisterPage extends Component {
  // static propTypes = {
  //
  // };

  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <h2>Sign Up</h2>
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
            <input type="submit" value="Sign Up"/>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'auth',
})(RegisterPage)
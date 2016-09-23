import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux';

import {
  FormInput,
  FormAlert,
  FormHeading,
  FormButtons
} from './../../../Common/Components/Form';
import forms from './../../../../styles/forms.css';
import { validateEmail } from '../../../Common/Helpers/common';

class SignUp extends Component {

  onSubmitForm(props) {
    this.props.signUp(props);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form>
          <Field
            name="email"
            type="text"
            placeholder="Email"
            component={ FormInput } />
          <Field
            name="username"
            type="text"
            placeholder="Username"
            component={ FormInput } />
          <Field
            name="password"
            type="password"
            placeholder="Password"
            component={ FormInput } />
          <Field
            name="password2"
            type="password"
            placeholder="Confirm Password"
            component={ FormInput } />
          <FormAlert errorMessage={ this.props.errorMessage } />
          <FormButtons
            labelSubmit="Submit"
            labelCancel="Cancel"
            actionSubmit={ handleSubmit(this.onSubmitForm.bind(this)) }
            actionCancel={ this.props.onCloseAction } />
        </form>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (formProps.password && formProps.password.length < 6) {
    errors.password = 'Password should contain at least 6 symbols';
  }

  if (formProps.email && !validateEmail(formProps.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.username) {
    errors.username = 'Please enter a username';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (formProps.password !== formProps.password2) {
    errors.password2 = 'Entered passwords don\'t match';
  }

  return errors;
}

export default reduxForm({
  form: 'SignUpForm',
  validate
})(SignUp)

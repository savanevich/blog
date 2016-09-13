import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';

import {
  FormInput,
  FormAlert,
  FormHeading,
  FormSubmitButton
} from './../../../Common/Components/Form';
import forms from './../../../../styles/forms.css';
import { validateEmail } from '../../../Common/Helpers/common';
import { signInUser } from './../../AuthActions';


class SignIn extends Component {

  onSubmitForm(props) {
    this.props.signIn(props);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className={ forms['form'] }>
        <form className={ forms['form-content'] }>
          <FormHeading label="Sign In Form" />
          <Field
            name="email"
            type="text"
            placeholder="Email"
            className={ forms['form-field'] }
            component={ FormInput } />
          <Field
            name="password"
            type="password"
            placeholder="Confirm Password"
            className={ forms['form-field'] }
            component={ FormInput } />
          <FormAlert errorMessage={ this.props.errorMessage } />
          <FormSubmitButton
            label="Submit"
            actionSubmit={ handleSubmit(this.onSubmitForm.bind(this)) } />
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

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  return errors;
}

export default reduxForm({
  form: 'SignInForm',
  validate
})(SignIn)

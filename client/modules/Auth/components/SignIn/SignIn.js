import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { bindActionCreators } from 'redux';

import FormField from './../../../Common/Components/FormField';
import forms from './../../../../styles/forms.css';
import { validateEmail } from './../../../../helpers/common';
import { signInUser } from './../../AuthActions';


class SignIn extends Component {

  onSubmitForm(props) {
    this.props.signIn(props);
  };

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className={ forms['error'] }>
          <strong>Ooops!</strong> { this.props.errorMessage }
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className={ forms['form'] }>
        <form className={ forms['form-content'] }>
          <h2
            className={ forms['form-title'] }>
            <FormattedMessage id="signInForm" />
          </h2>
          <Field
            name="email"
            type="text"
            placeholder={ this.props.intl.messages.emailField }
            className={ forms['form-field'] }
            component={ FormField } />
          <Field
            name="password"
            type="password"
            placeholder={ this.props.intl.messages.passwordField }
            className={ forms['form-field'] }
            component={ FormField } />
          { this.renderAlert() }
          <a
            className={ forms['post-submit-button'] }
            action="submit"
            onClick={ handleSubmit(this.onSubmitForm.bind(this)) }>
            <FormattedMessage id="submit" />
          </a>
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
})(injectIntl(SignIn))

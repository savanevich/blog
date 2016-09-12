import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux';

import FormInput from './../../../Common/Components/FormInput/FormInput';
import FormTextArea from './../../../Common/Components/FormTextarea/FormTextarea';
import forms from './../../../../styles/forms.css';


// avoiding bug unknown prop `onTouchTap`
// of material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export class PostCreate extends Component {

  onSubmitForm(props) {
    this.props.addPost(props);
  }

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
      <div className={forms['form']}>
        <div className={forms['form-content']}>
          <h2
            className={forms['form-title']}>
            Create new post
          </h2>
          <Field
            name="username"
            type="text"
            placeholder="Author's Name"
            className={ forms['form-field'] }
            component={ FormInput } />
          <Field
            name="title"
            type="text"
            placeholder="Post Title"
            className={ forms['form-field'] }
            component={ FormInput } />
          <Field
            name="content"
            type="text"
            placeholder="Form Content"
            className={ forms['form-field'] }
            component={ FormTextArea } />
          { this.renderAlert() }
          <a
            className={forms['post-submit-button']}
            href="#"
            onClick={ handleSubmit(this.onSubmitForm.bind(this)) }>
            Submit
          </a>
        </div>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.username) {
    errors.username = 'Please enter a username';
  }

  if (!formProps.title) {
    errors.title = 'Please enter a title';
  }

  if (!formProps.content) {
    errors.content = 'Please enter a content';
  }

  return errors;
}

export default reduxForm({
  form: 'PostCreateForm',
  validate
})(PostCreate)

import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux';

import {
  FormInput,
  FormAlert,
  FormHeading,
  FormSubmitButton,
  FormTextarea,
  FormUpload
} from './../../../Common/Components/Form';
import forms from './../../../../styles/forms.css';

export class PostCreate extends Component {

  onSubmitForm(props) {
    this.props.addPost(props);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className={forms['form']}>
        <div className={forms['form-content']}>
          <FormHeading label="Create new post" />
          <Field
            name="title"
            type="text"
            placeholder="Title"
            className={ forms['form-field'] }
            component={ FormInput } />
          <Field
            name="preview"
            type="text"
            placeholder="Preview"
            rows="3"
            className={ forms['form-field'] }
            component={ FormTextarea } />
          <Field
            name="content"
            type="text"
            placeholder="Content"
            rows="8"
            className={ forms['form-field'] }
            component={ FormTextarea } />
          <Field
            name="postImage"
            label="Upload post image"
            component={ FormUpload } />
          <FormAlert errorMessage={ this.props.errorMessage } />
          <FormSubmitButton
            label="Submit"
            actionSubmit={ handleSubmit(this.onSubmitForm.bind(this)) } />
        </div>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.title) {
    errors.title = 'Please enter a title';
  }

  if (!formProps.preview) {
    errors.preview = 'Please enter a preview';
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

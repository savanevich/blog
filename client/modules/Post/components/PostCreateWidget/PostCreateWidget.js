import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form'

import {
  FormInput,
  FormAlert,
  FormHeading,
  FormButtons,
  FormTextarea,
  FormUpload,
  FormTagsInput
} from './../../../Common/Components/Form';
import forms from './../../../../styles/forms.css';

export class PostCreate extends Component {

  onSubmitForm(props) {
    this.props.addPost(props);
  }

  render() {
    const { handleSubmit, reset } = this.props;

    return (
        <div className={forms['form-content']}>
          <FormHeading label="Create new post" />
          <Field
            name="title"
            type="text"
            placeholder="Title"
            component={ FormInput } />
          <Field
            name="postImage"
            label="Drop image here or click to select image for attaching to post."
            className={ forms['form-field-upload'] }
            component={ FormUpload }/>
          <Field
            name="preview"
            type="text"
            placeholder="Preview"
            rows="4"
            component={ FormInput } />
          <Field
            name="content"
            type="text"
            placeholder="Content"
            rows="10"
            component={ FormInput } />
          <Field
            name="tags"
            type="text"
            component={ FormTagsInput } />
          <FormAlert errorMessage={ this.props.errorMessage } />
          <FormButtons
            labelSubmit="Submit"
            labelCancel="Reset"
            actionSubmit={ handleSubmit(this.onSubmitForm.bind(this)) }
            actionCancel={ reset }/>
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

  if (!formProps.postImage) {
    errors.postImage = 'Please upload a cover for the post';
  }

  return errors;
}

export default reduxForm({
  form: 'PostCreateForm',
  validate
})(PostCreate)

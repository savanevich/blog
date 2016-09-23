import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux';
import { API_URL } from './../../../Common/Helpers/apiCaller';

import {
  FormInput,
  FormAlert,
  FormHeading,
  FormButtons,
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
            name="postImage"
            label="Drop image here or click to select image for attaching to post."
            className={ forms['form-field-upload'] }
            component={ FormUpload }/>
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
          <FormAlert errorMessage={ this.props.errorMessage } />
          <FormButtons
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

  if (!formProps.postImage) {
    errors.postImage = 'Please upload a cover for the post';
  }

  return errors;
}

export default reduxForm({
  form: 'PostCreateForm',
  validate
})(PostCreate)

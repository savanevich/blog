import React, { PropTypes, Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import Paper from 'material-ui/Paper';

import {
  FormInput,
  FormButtons
} from './../../../Common/Components/Form';

import styles from './CommentBox.css';
import Authentication from './../../../Auth/containers/RequireAuthContainer/RequireAuthContainer';

class CommentBox extends Component {

  onSubmitForm(props) {
    this.props.addComment(props);
    this.props.reset();
  }

  render() {
    const { handleSubmit, reset, dirty } = this.props;

    return (
      <div>
        <Paper className={styles['comment-box']}>
          <Field
            name="body"
            type="text"
            placeholder="Add new comment"
            rows={dirty ? 4 : 2}
            component={ FormInput } />
          <FormButtons
            labelSubmit="Submit"
            labelCancel="Reset"
            actionSubmit={handleSubmit(this.onSubmitForm.bind(this))}
            actionCancel={reset}/>
        </Paper>
        <hr className={styles.divider}/>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.body) {
    errors.body = 'Please enter a comment.';
  }

  return errors;
}

CommentBox.propTypes = {
  addComment: PropTypes.func.isRequired
};


export default Authentication(reduxForm({
  form: 'AddCommentForm',
  validate
})(CommentBox))

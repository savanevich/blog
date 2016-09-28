import React, { Component } from 'react';
import TagsInput from 'react-tagsinput';

import forms from './../../../../../styles/forms.css';
import styles from './FormTagsInput.css';

var tagProps = {
  className: styles['react-tagsinput-tag'],
  classNameRemove: styles['react-tagsinput-remove']
};

var inputProps ={
  className: styles['react-tagsinput-input'],
  placeholder: 'Add a tag'
};

class FormTagsInput extends Component {

  constructor() {
    super();
    this.state = {tags: []};
  }

  handleChange(tags) {
    this.setState({tags});
    this.props.input.onChange({tags});
  }

  render() {
    return <TagsInput
      value={this.state.tags}
      onChange={::this.handleChange}
      maxTags={5}
      onlyUnique={true}
      tagProps={tagProps}
      focusedClassName={styles['react-tagsinput--focused']}
      className={styles['react-tagsinput']}
      inputProps={inputProps}
      addKeys={[9, 13, 188]}
    />
  }
}

export default FormTagsInput;

import React, { Component, PropTypes } from 'react';

import styles from './PostCreateWidget.css';

export class PostCreateWidget extends Component {
  addPost = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  };

  render() {
    return (
      <div className={styles['form']}>
        <div className={styles['form-content']}>
          <h2
            className={styles['form-title']}>
            Create new post
          </h2>
          <input
            placeholder="Author's Name"
            className={styles['form-field']}
            ref="name"
          />
          <input
            placeholder="Post Title"
            className={styles['form-field']}
            ref="title" />
          <textarea
            placeholder="Post Content"
            className={styles['form-field']}
            ref="content" />
          <a
            className={styles['post-submit-button']}
            href="#"
            onClick={this.addPost}>
            Submit
          </a>
        </div>
      </div>
    );
  }
}

export default PostCreateWidget;

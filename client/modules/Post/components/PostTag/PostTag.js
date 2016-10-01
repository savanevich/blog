import React, { PropTypes } from 'react';
import styles from './PostTag.css';

function PostTag(props) {

  return (
    <a href="#" className={styles['tag-link']}>
      {props.label}
    </a>
  );
}

PostTag.propTypes = {
  label: PropTypes.string.isRequired
};

export default PostTag;

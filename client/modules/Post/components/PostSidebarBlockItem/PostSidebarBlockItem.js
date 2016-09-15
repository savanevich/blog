import React, { PropTypes } from 'react';

import PostTinyPreview from './../PostTinyPreview/PostTinyPreview';
import styles from './PostSidebarBlockItem.css';

function PostSidebarBlockItem(props) {

  return (
    <div className={styles['popular-posts-block']}>
      <div className={styles['block-header']}>
        <h4 className={styles['catalog-name']}>
          { props.catalogName }
        </h4>
        <p className={styles['catalog-description']}>
          { props.catalogDescription }
        </p>
      </div>
      {
        props.posts.map((post, key) => (
          <PostTinyPreview
            post={post}
            key={key}
          />
        ))
      }
    </div>
  );
}

PostTinyPreview.propTypes = {
  catalogName: PropTypes.string.isRequired,
  catalogDescription: PropTypes.string.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    userImage: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired
};

export default PostSidebarBlockItem;

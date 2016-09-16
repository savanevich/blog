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

PostSidebarBlockItem.propTypes = {
  catalogName: PropTypes.string.isRequired,
  catalogDescription: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired
};

export default PostSidebarBlockItem;

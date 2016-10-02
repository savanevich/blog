import React, { PropTypes } from 'react';

import PostTagsList from './../PostTagsList/PostTagsList';
import CommentsCount from './../CommentsCount/CommentsCount';
import PostListItemViewsCount from './../PostListItemViewsCount/PostListItemViewsCount';

const styles = {
  height: '50px',
  paddingTop: '15px'
};

function PostListItemFooter(props) {
  return (
    <div style={styles}>
      <PostListItemViewsCount viewsCount={props.viewsCount} />
      <CommentsCount commentsCount={props.commentsCount} />
      <PostTagsList tags={props.tags} />
    </div>
  );
}

PostListItemFooter.propTypes = {
  commentsCount: PropTypes.number.isRequired,
  tags: PropTypes.array.isRequired
};

export default PostListItemFooter;

import React, { PropTypes } from 'react';

import PostListItem from './../PostListItem/PostListItem';

function PostList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <PostListItem
            post={post}
            auth={props.auth}
            key={post.cuid}
            onDelete={() => props.handleDeletePost(post.cuid)}
          />
        ))
      }
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    })
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

export default PostList;

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';

import styles from './PostTinyPreview.css';

function PostTinyPreview(props) {

  return (
    <div>
      <Link to={`/posts/${props.post.cuid}`} className={styles['preview-link']}>
        <ListItem
          disabled={true}
          leftAvatar={
            <Avatar src={ require('./../../../../../server/images/posts/' + props.post.coverUrl) } />
          }
          primaryText={ <p className={styles['primary-text']}>{props.post.title}</p> }
          secondaryText={`by ${props.post.user.username}` }
        >
        </ListItem>
      </Link>
    </div>
  );
}

PostTinyPreview.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    })
  }).isRequired
};

export default PostTinyPreview;

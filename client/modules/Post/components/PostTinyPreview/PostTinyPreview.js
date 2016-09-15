import React, { PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';

import styles from './PostTinyPreview.css';

function PostTinyPreview(props) {

  return (
    <div>
      <ListItem
        disabled={true}
        leftAvatar={
        <Avatar src={ require('./../../../../../server/images/users/' + props.post.userImage) } />
      }
        primaryText={ <p className={styles['primary-text']}>{props.post.title}</p> }
        secondaryText={ props.post.username }
      >
      </ListItem>
    </div>
  );
}

PostTinyPreview.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    userImage: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired
};

export default PostTinyPreview;

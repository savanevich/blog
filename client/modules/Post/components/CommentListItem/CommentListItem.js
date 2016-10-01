import React, { PropTypes, Component } from 'react';
const dateFormat = require('dateformat');
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

import styles from './CommentListItem.css';

const style = {
  padding: '0 40px 20px 40px',
  width: '100%',
  maxWidth: '700px',
  margin: '25px auto',
  fontSize: '14px',
  backgroundColor: 'white'
};

function CommentsListItem(props) {

  return (
    <Paper style={style} zDepth={1} >
      <div className={styles['comment-item-header']}>
        <div className={styles['comment-item-header-avatar']}>
          <Avatar src={ require('./../../../../../server/images/users/' + props.comment.user.avatarUrl) } size={35} />
        </div>
        <div className={styles['comment-item-header-author-name']}>
          <div>
            {props.comment.user.username}
          </div>
          <div className={styles['comment-item-header-time-added']}>
            {dateFormat(props.comment.dateAdded, "mmmm dS, yyyy, h:MM TT")}
          </div>
        </div>
      </div>
      <div className={styles['comment-item-body']}>
        {props.comment.body}
      </div>
    </Paper>
  );
}

CommentsListItem.propTypes = {
  comment: PropTypes.shape({
    body: PropTypes.string.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
    })
  }).isRequired
};


export default CommentsListItem;

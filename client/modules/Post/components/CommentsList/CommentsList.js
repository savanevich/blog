import React, { PropTypes, Component } from 'react';
import _ from 'lodash';

import CommentListItem from './../CommentListItem/CommentListItem';

const styles = {
  width: '100%',
  maxWidth: '850px',
  margin: '40px auto'
};

function CommentsList(props) {

  let comments = props.comments;
  //props.comments.reverse();
  comments = _.orderBy(comments, ['dateAdded'], ['desc']);

  return (
    <div style={styles}>
      {comments && comments.map(comment => (
          <CommentListItem
            key={comment.cuid}
            comment={comment}
          />
      ))}
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired
};


export default CommentsList;

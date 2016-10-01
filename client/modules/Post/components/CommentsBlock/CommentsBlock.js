import React, { PropTypes, Component } from 'react';

import CommentBox from './../CommentBox/CommentBox';
import CommentsList from './../CommentsList/CommentsList';

const titleStyle = {
  marginLeft: '170px',
  marginTop: '30px',
  display: 'block'
};

function CommentsBlock(props) {
  return (
    <div>
      <h3 style={titleStyle}>Comments:</h3>
      <CommentBox addComment={props.addComment} />
      <CommentsList comments={props.comments} />
    </div>
  );
}

CommentsBlock.propTypes = {
  comments: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired
};

export default CommentsBlock;

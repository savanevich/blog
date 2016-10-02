import React, { PropTypes } from 'react';
import CommunicationComment from 'material-ui/svg-icons/communication/comment';

const styles = {
  block: {
    float: 'right',
    paddingTop: '10px',
    marginRight: '20px'
  },
  icon: {
    float: 'left'
  },
  counter: {
    float: 'left',
    paddingTop: '5px',
    paddingLeft: '5px'
  }
};

function CommentsCount(props) {
  return (
    <div style={styles.block}>
      <div style={styles.icon}><CommunicationComment color="grey" /></div>
      <div style={styles.counter}>{props.commentsCount}</div>
    </div>
  );
}

CommentsCount.propTypes = {
  commentsCount: PropTypes.number.isRequired
};

export default CommentsCount;

import React, { PropTypes } from 'react';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';

const styles = {
  block: {
    float: 'right',
    paddingTop : '10px'
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

function PostListItemViewsCount(props) {
  return (
    <div style={styles.block}>
      <div style={styles.icon}><RemoveRedEye color="grey" /></div>
      <div style={styles.counter}>{props.viewsCount}</div>
    </div>
  );
}

PostListItemViewsCount.propTypes = {
  viewsCount: PropTypes.number.isRequired
};

export default PostListItemViewsCount;

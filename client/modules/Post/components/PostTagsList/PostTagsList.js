import React, { PropTypes } from 'react';
import PostTag from './../PostTag/PostTag';

function PostTagsList(props) {

  const styles = {
    chip: {
      margin: 4
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      paddingTop: '30px'
    },
    label: {
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.wrapper}>
      {
        props.tags.map((tag, key) => (
          <PostTag
            style={styles.chip}
            key={key}
            label={tag}
          />
        ))
      }
    </div>
  );
}

PostTagsList.propTypes = {
  tags: PropTypes.array.isRequired
};

export default PostTagsList;

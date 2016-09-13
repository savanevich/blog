import React, {
  PropTypes,
  Component
} from 'react';
import { connect } from 'react-redux';

import { createPost } from '../../PostActions';

import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

class PostsNewPage extends Component {
  handleAddPost = (title, content, preview) => {
    this.props.dispatch(createPost({ title, content, preview }));
  };

  render() {
    return (
      <PostCreateWidget addPost={this.handleAddPost} />
    );
  }
}

export default connect(null)(PostsNewPage);

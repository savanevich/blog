import React, {
  PropTypes,
  Component
} from 'react';
import { connect } from 'react-redux';

import { createPost } from '../../PostActions';

import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

class PostsNewPage extends Component {
  handleAddPost = (name, title, content) => {
    this.props.dispatch(createPost({ name, title, content }));
  };

  render() {
    return (
      <PostCreateWidget addPost={this.handleAddPost} />
    );
  }
}

export default connect(null)(PostsNewPage);

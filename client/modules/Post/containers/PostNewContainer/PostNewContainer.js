import React, {
  PropTypes,
  Component
} from 'react';
import { connect } from 'react-redux';

import { createPost } from '../../PostActions';
import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

class PostsNewPage extends Component {
  handleAddPost = (params) => {

    const formData = new FormData();
    formData.append('title', params.title);
    formData.append('content', params.content);
    formData.append('preview', params.preview);
    formData.append('uploads[]', params.postImage[0], params.postImage[0].name);

    this.props.dispatch(createPost(formData));
  };

  render() {
    return (
      <PostCreateWidget addPost={this.handleAddPost} />
    );
  }
}

export default connect(null)(PostsNewPage);

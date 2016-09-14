import React, {
  PropTypes,
  Component
} from 'react';
import { connect } from 'react-redux';

import { createPost } from '../../PostActions';

import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

class PostsNewPage extends Component {
  handleAddPost = (props) => {

    const formData = new FormData();
    formData.append('title', props.title);
    formData.append('content', props.content);
    formData.append('preview', props.preview);
    formData.append('uploads[]', props.postImage[0], props.postImage[0].name);
    console.log('from Post new Page');
    console.log(formData);
    this.props.dispatch(createPost(formData));
  };

  render() {
    return (
      <PostCreateWidget addPost={this.handleAddPost} />
    );
  }
}

export default connect(null)(PostsNewPage);

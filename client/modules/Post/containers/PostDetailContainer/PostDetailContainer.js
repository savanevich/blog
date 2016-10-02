import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PostDetail from './../../components/PostDetail/PostDetail';
import { fetchPost, addComment } from './../../PostActions';

class PostDetailPage extends Component {

  componentWillMount() {
    this.props.fetchPost(this.props.params.cuid);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleAddComment = (props) => {
    this.props.addComment(this.props.params.cuid, props);
  };

  render() {

    return (
      <PostDetail post={this.props.post} addComment={this.handleAddComment} />
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.currentPost
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost, addComment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailPage);

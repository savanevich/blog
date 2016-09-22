import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostDetail from './../../components/PostDetail/PostDetail';
import { fetchPost } from './../../PostActions';

class PostDetailPage extends Component {

  componentWillMount() {
    this.props.fetchPost(this.props.params.cuid);
  }

  render() {

    return (
      <PostDetail post={ this.props.post } />
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.currentPost
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailPage);

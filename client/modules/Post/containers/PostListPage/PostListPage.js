import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PostList from '../../components/PostList/PostList';
import { fetchPosts, deletePost } from '../../PostActions';

class PostListPage extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  handleDeletePost = post => {
    if (confirm('Do you want to delete this post')) {
      this.props.deletePost(post);
    }
  };

  render() {
    if (this.props.posts) {
      return (
        <PostList handleDeletePost={this.handleDeletePost} posts={this.props.posts}/>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.allPosts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts, deletePost }, dispatch);
}

PostListPage.contextTypes = {
  router: React.PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListPage);

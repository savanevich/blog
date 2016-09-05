import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import PostList from '../../components/PostList';


import { addPostRequest, fetchPosts, deletePostRequest } from '../../PostActions';
import { toggleAddPost } from '../../../App/AppActions';
import { getPosts } from '../../PostReducer';

class PostListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  handleDeletePost = post => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deletePostRequest(post));
    }
  };

  render() {
    return (
      <div>
        <PostList handleDeletePost={this.handleDeletePost} posts={this.props.posts} />
      </div>
    );
  }
}

PostListPage.need = [() => { return fetchPosts(); }];

function mapStateToProps(state) {
  return {
    posts: getPosts(state)
  };
}

PostListPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })).isRequired,
  dispatch: PropTypes.func.isRequired
};

PostListPage.contextTypes = {
  router: React.PropTypes.object
};

export default connect(mapStateToProps)(PostListPage);

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PostList from '../../components/PostList/PostList';
import PostListSidebar from '../../components/PostListSidebar/PostListSidebar'
import styles from './PostListContainer.css';
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
        <div>
          <div className={styles['posts-list']}>
            <PostList
              handleDeletePost={this.handleDeletePost}
              posts={this.props.posts}
              auth={this.props.auth} />
          </div>
          <div className={styles['posts-sidebar']}>
            <PostListSidebar
              popularPosts={this.props.popularPosts}
              randomPosts={this.props.randomPosts}
            />
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.allPosts,
    popularPosts: state.posts.popularPosts,
    randomPosts: state.posts.randomPosts,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts, deletePost }, dispatch);
}

PostListPage.contextTypes = {
  router: React.PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListPage);

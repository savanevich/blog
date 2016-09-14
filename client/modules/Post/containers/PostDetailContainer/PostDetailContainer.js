import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import styles from '../../components/PostListItem/PostListItem.css';
import { fetchPost } from '../../PostActions';

class PostDetailPage extends Component {

  componentWillMount() {
    this.props.fetchPost(this.props.params.cuid);
  }

  render() {
    if (this.props.post) {
      return (
        <div>
          <Helmet title={this.props.post.title}/>
          <div className={`${styles['single-post']} ${styles['post-detail']}`}>
            <h3 className={styles['post-title']}>{this.props.post.title}</h3>
            <p className={styles['author-name']}>
              By @savonevich
            </p>
            <p className={styles['post-desc']}>{this.props.post.content}</p>
          </div>
        </div>
      );
    } else {
      return (<div>Post doesn't exist</div>);
    }
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

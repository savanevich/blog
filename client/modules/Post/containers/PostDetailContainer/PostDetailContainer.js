import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
var dateFormat = require('dateformat');

import styles from './PostDetailContainer.css';
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
            <div>
              <ListItem
                disabled={true}
                leftAvatar={
                  <Avatar src={ require('./../../../../../server/images/users/sav.jpg') } size="45" />
                }
                primaryText={ <p className={ styles['primary-text']} >by savonevich</p> }
                secondaryText={ dateFormat(this.props.post.dateAdded, "mmmm dS, yyyy, h:MM TT") }
              >
              </ListItem>
            </div>
            <p>
              <img className={ styles['post-image'] } src={ require('./../../../../../server/images/posts/' + this.props.post.cover_url) } />
            </p>
            <h3 className={styles['post-title']}>{ this.props.post.title }</h3>
            <p className={styles['post-preview']}><b>{ this.props.post.preview }</b></p>
            <p className={styles['post-desc']}>{ this.props.post.content }</p>
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

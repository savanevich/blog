import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
var dateFormat = require('dateformat');
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import PostListItemFooter from './../PostListItemFooter/PostListItemFooter';
import styles from './PostListItem.css';

const inlStyles = {
  preview: {
    paddingBottom: 0
  }
};

export class PostListItem extends Component {

  renderDeleteButton() {
    if (this.props.auth.authenticated) {
      return (
        <div className={ styles['right-float'] } >
          <FlatButton label="Delete Post" onClick={ this.props.onDelete } />
        </div>
      );
    }
  }

  render() {
    return (
      <div className={styles['single-post']}>
        <Card>
          <CardHeader
            title={ `by ${this.props.post.user.username}` }
            subtitle={ dateFormat(this.props.post.dateAdded, "mmmm dS, yyyy, h:MM TT") }
            avatar={ require('./../../../../../server/images/users/' + this.props.post.user.avatarUrl) }
          >
            { this.renderDeleteButton() }
            </CardHeader>
          <Link to={`/posts/${this.props.post.cuid}`} >
            <CardMedia overlay={<CardTitle title={ this.props.post.title } />} >
              <img src={ require('./../../../../../server/images/posts/' + this.props.post.coverUrl) }  />
            </CardMedia>
          </Link>
          <CardText style={inlStyles.preview}>
            { this.props.post.preview }
            <PostListItemFooter commentsCount={this.props.post.commentsCount} tags={this.props.post.tags} viewsCount={this.props.post.viewsCounter}  />
          </CardText>
        </Card>
        <hr className={styles.divider}/>
      </div>
    );
  }
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    cuid: PropTypes.string.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired
    })
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default PostListItem;

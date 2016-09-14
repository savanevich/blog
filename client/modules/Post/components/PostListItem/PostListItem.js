import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
var dateFormat = require('dateformat');
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import styles from './PostListItem.css';

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
            title="by @savonevich"
            subtitle={ dateFormat(this.props.post.dateAdded, "mmmm dS, yyyy, h:MM TT") }
            avatar={ require('./../../../../../server/images/users/sav.jpg') }
          >
            { this.renderDeleteButton() }
            </CardHeader>
          <Link to={`/posts/${this.props.post.cuid}`} >
            <CardMedia overlay={<CardTitle title={ this.props.post.title } />} >
              <img src={ require('./../../../../../server/images/posts/' + this.props.post.cover_url) }  />
            </CardMedia>
          </Link>
          <CardText>
            { this.props.post.preview }
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
    content: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    cover_url: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default PostListItem;

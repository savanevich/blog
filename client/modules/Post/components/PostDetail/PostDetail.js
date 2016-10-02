import React, { PropTypes, Component } from 'react';
import Helmet from 'react-helmet';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import ListItem from 'material-ui/List/ListItem';
var dateFormat = require('dateformat');

import styles from './PostDetail.css';
import CommentsBlock from './../CommentsBlock/CommentsBlock';
import PostListItemFooter from './../PostListItemFooter/PostListItemFooter';

function PostDetail(props) {

  if (props.post) {
    return (
      <div>
        <Helmet title={ props.post.title }/>
        <Paper className={`${styles['single-post']} ${styles['post-detail']}`}>
          <div>
            <ListItem
              disabled={true}
              leftAvatar={
                  <Avatar src={ require('./../../../../../server/images/users/' + props.post.user.avatarUrl) } size={ 45 } />
                }
              primaryText={ <p className={ styles['primary-text']} >by { props.post.user.username }</p> }
              secondaryText={ dateFormat(props.post.dateAdded, "mmmm dS, yyyy, h:MM TT") }
            >
            </ListItem>
          </div>
          <p>
            <img className={ styles['post-image'] } src={ require('./../../../../../server/images/posts/' + props.post.coverUrl) } />
          </p>
          <h3 className={styles['post-title']}>{ props.post.title }</h3>
          <p className={styles['post-preview']}><b>{ props.post.preview }</b></p>
          <p className={styles['post-desc']}>{ props.post.content }</p>
          <PostListItemFooter commentsCount={props.post.comments.length} tags={props.post.tags} viewsCount={props.post.viewsCounter} />
        </Paper>
        <CommentsBlock comments={props.post.comments} addComment={props.addComment} />
      </div>
    );
  } else {

    return (<div>Post doesn't exist</div>);
  }
}

export default PostDetail;

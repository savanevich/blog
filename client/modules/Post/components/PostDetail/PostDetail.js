import React, { PropTypes, Component } from 'react';
import Helmet from 'react-helmet';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
var dateFormat = require('dateformat');

import styles from './PostDetail.css';

function PostDetail(props) {

  if (props.post) {
    return (
      <div>
        <Helmet title={ props.post.title }/>
        <div className={`${styles['single-post']} ${styles['post-detail']}`}>
          <div>
            <ListItem
              disabled={true}
              leftAvatar={
                  <Avatar src={ require('./../../../../../server/images/users/sav.jpg') } size={ 45 } />
                }
              primaryText={ <p className={ styles['primary-text']} >by savonevich</p> }
              secondaryText={ dateFormat(props.post.dateAdded, "mmmm dS, yyyy, h:MM TT") }
            >
            </ListItem>
          </div>
          <p>
            <img className={ styles['post-image'] } src={ require('./../../../../../server/images/posts/' + props.post.cover_url) } />
          </p>
          <h3 className={styles['post-title']}>{ props.post.title }</h3>
          <p className={styles['post-preview']}><b>{ props.post.preview }</b></p>
          <p className={styles['post-desc']}>{ props.post.content }</p>
        </div>
      </div>
    );
  } else {

    return (<div>Post doesn't exist</div>);
  }
}

export default PostDetail;

import React, { PropTypes, Component } from 'react';

import PostSidebarBlockItem from './../PostSidebarBlockItem/PostSidebarBlockItem';
import Footer from './../../../App/components/Footer/Footer';

export class PostSidebar extends Component {

  render() {
    if (this.props.popularPosts && this.props.popularPosts ) {

      return (
        <div>
          <PostSidebarBlockItem
            catalogName="Editor's picks"
            catalogDescription="Stories worth talking about"
            posts={ this.props.popularPosts }
          />
          <PostSidebarBlockItem
            catalogName="Reading roulette"
            catalogDescription="Take a spin with stories you may have missed."
            posts={ this.props.randomPosts }
          />
          <Footer />
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
}

export default PostSidebar;

import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import PostSidebarBlockItem from './../PostSidebarBlockItem/PostSidebarBlockItem';

export class PostSidebar extends Component {

  render() {

    // mocks
    const posts = [
      {
        title: 'Your Guide to Optimizing Images for SEO',
        username: 'savonevich',
        userImage: 'sav.jpg'
      },
      {
        title: 'Versioning Show, Episode 8, with Miriam Suzanne',
        username: 'savonevich',
        userImage: 'sav.jpg'
      },
      {
        title: 'Pragmatic Uses of Monkey Patching in JavaScript',
        username: 'savonevich',
        userImage: 'sav.jpg'
      }
    ];

    return (
      <div>
        <PostSidebarBlockItem
          catalogName="Editor's picks"
          catalogDescription="Stories worth talking about"
          posts={ posts }
        />
        <PostSidebarBlockItem
          catalogName="Reading roulette"
          catalogDescription="Take a spin with stories you may have missed."
          posts={ posts }
        />
      </div>
    );
  }
}

export default PostSidebar;

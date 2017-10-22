import axios from 'axios';
import React, { Component } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default {
  getSiteProps: () => ({
    title: 'React Static'
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('http://y.gpawlik.com/wp-json/wp/v2/posts');

    return [
      {
        path: '/',
        component: 'src/domains/Posts/PostList',
        getProps: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/domains/Posts/PostSingle',
          getProps: () => ({
            post
          })
        }))
      }
    ];
  },
  Html: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children } = this.props;

      const sheet = new ServerStyleSheet();
      const newChildren = sheet.collectStyles(children);
      const styleTags = sheet.getStyleElement();

      return (
        <Html>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {styleTags}
          </Head>
          <Body>{newChildren}</Body>
        </Html>
      );
    }
  }
};

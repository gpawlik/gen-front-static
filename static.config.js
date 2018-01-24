import axios from 'axios';
import React, { Component } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default {
  getSiteProps: () => ({
    title: 'Generation Y'
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'http://y.gpawlik.com/wp-json/wp/v2/posts'
    );

    return [
      {
        path: '/',
        component: 'src/domains/Posts/PostList',
        getProps: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/p/${post.slug}`,
          component: 'src/domains/Posts/PostSingle',
          getProps: () => ({
            post
          })
        }))
      }
    ];
  },

  siteRoot: 'http://generation-y.org',

  Html: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children } = this.props;

      const sheet = new ServerStyleSheet();
      const newChildren = sheet.collectStyles(children);
      const styleTags = sheet.getStyleElement();

      return (
        <Html>
          <Head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/assets/favicons/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/assets/favicons/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/assets/favicons/favicon-16x16.png"
            />
            <link rel="manifest" href="/assets/favicons/manifest.json" />
            <link
              rel="mask-icon"
              href="/assets/favicons/safari-pinned-tab.svg"
              color="#5bbad5"
            />
            <meta name="theme-color" content="#ffffff" />
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-113029819-1"
            />
            <script src="http://api.generation-y.org/wp-content/ga.js" />
            {styleTags}
          </Head>
          <Body>{newChildren}</Body>
        </Html>
      );
    }
  }
};

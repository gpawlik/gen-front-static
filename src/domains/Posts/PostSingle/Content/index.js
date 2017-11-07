import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { getRouteProps } from 'react-static';

import Header from 'components/Header';
import Container from './Container';
import Title from './Title';
import ImageBox from './ImageBox';
import PostMeta from 'domains/Posts/PostSingle/PostMeta';
import Related from 'domains/Posts/PostSingle/Related';
import Flex from 'components/Layout/Flex';
import FlexItem from 'components/Layout/FlexItem';

const Content = getRouteProps(
  ({
    post: {
      title,
      slug,
      excerpt,
      content,
      date,
      featuredImageUrl,
      prevPost = {},
      nextPost = {}
    }
  }) => {
    return (
      <Flex>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <description>{excerpt}</description>
        </Helmet>
        <Header slug={slug} text={title} />
        <FlexItem>
          <ImageBox src={featuredImageUrl} />
        </FlexItem>
        <FlexItem>
          <Container>
            <Title>{title}</Title>
            <PostMeta commentsNumber={5} date={date} />
            <section
              className="post-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </Container>
          <Related
            prevId={prevPost.id}
            prevTitle={prevPost.title}
            nextId={nextPost.id}
            nextTitle={nextPost.title}
          />
        </FlexItem>
      </Flex>
    );
  }
);

Content.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

Content.defaultProps = {
  title: '',
  content: ''
};

export default Content;

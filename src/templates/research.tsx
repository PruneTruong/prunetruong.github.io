/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { FC } from 'react';
import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { Heading } from 'rebass';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

const katex = require(`katex/dist/katex.min.css`);

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        post: markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "YYYY-MM-DD")
                path
                title
            }
            timeToRead
            excerpt
        }
    }
`;

interface ResearchArticleProps {
  data: {
    post: {
      frontmatter: {
        title: string;
        date: string;
        description?: string;
      };
      html: string;
      excerpt: string;
      timeToRead?: number;
    };
  };
}

const px = [`16px`, `8px`, `4px`];
const shadow = px.map(v => `rgba(0, 0, 0, 0.10) 0px ${v} ${v} 0px`);

const Research: FC<ResearchArticleProps> = ({ data: { post } }) => (
  <Layout>
    <section
      sx={{
        my: 5,
        '.gatsby-resp-image-wrapper': {
          my: [4, 4, 5],
          boxShadow: shadow.join(`, `),
        },
        figure: {
          '&[inline]': {
            display: 'inline-block',
          },
          img: {
            width: '100%',
          },
          '.gatsby-resp-image-wrapper': {
            mb: 2,
          },
          figcaption: { textAlign: 'center', fontStyle: 'italic' },
          mx: 0,
        },
        p: { fontSize: 2 },
        h1: { fontSize: 6 },
        h2: { fontSize: 5 },
        h3: { fontSize: 4 },
        h4: { fontSize: 3 },
        pre: {
          border: '1px solid rgba(0, 0, 0, 0.125)',
          p: 3,
          borderRadius: 5,
        },
        code: {
          fontFamily: 'monospace',
        },
        variant: `layout.content`,
        '.flex-row': {
          display: 'flex',
        }
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </section>
  </Layout>
);

export default Research;

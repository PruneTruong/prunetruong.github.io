/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { FC } from 'react';
import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { Heading } from 'rebass';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import ResearchLinks from '../components/research-links';

const katex = require(`katex/dist/katex.min.css`);

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        post: markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "YYYY-MM-DD")
                path
                title
                links {
                    type
                    link
                }
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
        links: Array<{type: string, link: string}>
      };
      html: string;
      excerpt: string;
      timeToRead?: number;
    };
  };
}

const StyledResearchLinks = styled(ResearchLinks)`
  display: flex;
  justify-content: space-around;
  a > svg {
    transition: 0.3s ease-in-out;
  }
  a:hover > svg {
    fill: ${props => props.theme.colors.primary};
  }
`;


const px = [`16px`, `8px`, `4px`];
const shadow = px.map(v => `rgba(0, 0, 0, 0.10) 0px ${v} ${v} 0px`);

const Research: FC<ResearchArticleProps> = ({ data: { post } }) => (
  <Layout>
    <section
      sx={{
        my: 3,
        '.gatsby-resp-image-wrapper': {
          my: [0, 0, 3],
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
        p: { fontSize: 1 },
        h1: { fontSize: 5 },
        h2: { fontSize: 4 },
        h3: { fontSize: 3 },
        h4: { fontSize: 2 },
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

import {
  ResearchSectionQuery,
  ResearchSectionQuery_allMarkdownRemark_nodes,
} from '../types/graphql';
import styled from '@emotion/styled';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import truncateText from '../utils/truncate-text';
import { Box, Flex, Heading, Text } from 'rebass';
import Img from 'gatsby-image';
import ResearchLinks from './research-links';

const DESCRIPTION_MAX_LENGTH = 300;

interface ResearchPostProps {
  post: ResearchSectionQuery_allMarkdownRemark_nodes;
}

const UndecoratedLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :hover {
    color: inherit;
  }
`;

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

const ResearchPost: FC<ResearchPostProps> = ({ post }) => {
  const renderDescription = () => {
    if (post.frontmatter?.description)
      return truncateText(post.frontmatter.description, DESCRIPTION_MAX_LENGTH);
    return post.excerpt;
  };

  return (
    <UndecoratedLink to={post.frontmatter!.path!}>
      <Box
        width={350}
        m={2}
        sx={{
          h1: { fontSize: 1 },
          boxShadow: '2px 4px 8px 0 rgba(0,0,0,0.2);',
          transition: '0.2s ease-in-out',
          ':hover': {
            boxShadow: '2px 4px 16px 0 rgba(0, 0, 0, 0.25)',
          },
          overflow: 'hidden',
        }}
      >
        <header>
          <Img fixed={post.frontmatter!.preview?.childImageSharp?.fixed!} />
          <Heading as="h3" fontSize={2} my={1} px={2}>
            {post.frontmatter!.title}
          </Heading>
        </header>
        <section>
          <Text as="p" variant="justified" fontSize={1} px={2} pb={2}>
            {renderDescription()}
          </Text>

          {post.frontmatter?.links && <StyledResearchLinks links={post.frontmatter.links} />}

        </section>
      </Box>
    </UndecoratedLink>
  );
};

const FeaturedResearch: FC = () => {
  const {
    allMarkdownRemark: { nodes },
  }: ResearchSectionQuery = useStaticQuery(graphql`
    query ResearchSectionQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 10
        filter: {
          fileAbsolutePath: { regex: "/content/research/" }
          frontmatter: { featured: { eq: true } }
        }
      ) {
        nodes {
          id
          frontmatter {
            path
            title
            description
            preview {
              childImageSharp {
                fixed(width: 348, height: 280) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            links {
                type
                link
            }
          }
          excerpt
          timeToRead
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <Heading as={'h2'}>Research</Heading>
      <Flex ml={4} my={2} justifyContent="space-around" flexWrap="wrap">
        {nodes.map(node => (
          <ResearchPost key={node.id} post={node} />
        ))}
      </Flex>
    </React.Fragment>
  );
};

export default FeaturedResearch;

import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Box, Heading } from 'rebass';
import { NewsSectionQuery } from '../types/graphql';
import theme from '../gatsby-plugin-theme-ui';

function formatDate(str: string) {
  const [year, month] = str.split('-');
  return `${month}/${year}`;
}

const News: FC = () => {
  const {
    allMarkdownRemark: { nodes },
  }: NewsSectionQuery = useStaticQuery(graphql`
    query NewsSectionQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 10
        filter: { fileAbsolutePath: { regex: "/content/news/" } }
      ) {
        nodes {
          id
          frontmatter {
            date
          }
          html
        }
      }
    }
  `);

  return (
    <>
      <Heading as={'h2'}>News</Heading>
      <Box
        ml={4}
        my={2}
        sx={{
          ...theme.styles,
          fontSize: 1,
          td: { paddingLeft: '2em', p: { padding: 0, margin: 0 } },
          th: { padding: 0 },
          'table td, table th': { borderBottomStyle: 'none' },
        }}
      >
        <table>
          {nodes.map(node => (
            <tr>
              <th>{formatDate(node.frontmatter?.date)}:</th>
              <td dangerouslySetInnerHTML={{ __html: node.html! }}></td>
            </tr>
          ))}
        </table>
      </Box>
    </>
  );
};

export default News;

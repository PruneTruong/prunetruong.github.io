/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC, ReactNode } from 'react';
import { Container } from 'theme-ui';
import { Global } from '@emotion/core';
import Header from './header';
import useSiteMetadata from '../hooks/use-site-metadata';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { author } = useSiteMetadata();
  return (
    <>
      <Global
        styles={theme => ({
          a: {
            transition: `all 0.2s ease-in-out`,
            color: `text`,
          },
        })}
      />
      <Container
        sx={{
          maxWidth: 1250,
          margin: '0 auto',
        }}
      >
        <Header />
        <main>{children}</main>
        <footer>
          © {author} {new Date().getFullYear()}
        </footer>
      </Container>
    </>
  );
};

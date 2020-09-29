/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { FC } from 'react';
import { Box, Flex, Heading, Link as TLink } from 'rebass';
import useSiteMetadata from '../hooks/use-site-metadata';
import { Link } from 'gatsby';
import { Github, Linkedin, Twitter } from '@icons-pack/react-simple-icons';
import theme from '../gatsby-plugin-theme-ui';

const Navigation: FC = () => (
  <Box as="nav" sx={{ 'a:not(:last-of-type)': { mr: 3 }, fontSize: 1 }}>

  </Box>
);

const ExternalLinks: FC = () => {
  const { social } = useSiteMetadata();

  return (<div sx={{
      '> a': {mx: 3}
    }}>
    {social.twitter && <a href={social.twitter}><Twitter color={theme.colors.secondary} size={32} /></a>}
    {social.linkedin && <a href={social.linkedin}><Linkedin color={theme.colors.secondary} size={32} /></a>}
    {social.github && <a href={social.github}><Github color={theme.colors.secondary} size={32} /></a>}
  </div>);
};

export const Header: FC = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <header>
      <Link to="/" color="heading" sx={{ textDecoration: 'none' }}>
        <Heading
          aria-label={`${siteTitle} - Back to home`}
          my={0}
          fontWeight="medium"
          fontSize={3}
        >
          {siteTitle}
        </Heading>
      </Link>
      <Flex
        alignItems="center"
        color="secondary"
        justifyContent="space-between"
        mt={-4}
        variant="dividers.bottom"
        sx={{
          a: { color: 'secondary', ':hover': { color: 'heading' } },
        }}
      >
        <Navigation />
        <ExternalLinks />
      </Flex>
    </header>
  );
};

export default Header;

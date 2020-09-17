/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { FC } from 'react';
import { Box, Flex, Heading, Link as TLink } from 'rebass';
import useSiteMetadata from '../hooks/use-site-metadata';
import { Link } from 'gatsby';

const Navigation: FC = () => (
  <Box as="nav" sx={{ 'a:not(:last-of-type)': { mr: 3 }, fontSize: 1 }}>
    <TLink as={Link} variant="links.secondary" href="#">
      Research
    </TLink>
    <TLink as={Link} variant="links.secondary" href="#">
      Resume
    </TLink>
  </Box>
);

const ExternalLinks: FC = () => null;

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
        mt={3}
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

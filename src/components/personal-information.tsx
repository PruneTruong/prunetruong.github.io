import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { PersonalInformationQuery } from '../types/graphql';
import styled from '@emotion/styled';
import { Heading, Text, Box, Flex, Link } from 'rebass';

const AVATAR_SIZE = 175;

const Avatar = styled(Img)`
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
`;

export const PersonalInformation: FC = () => {
  const {
    avatar,
    site: {
      siteMetadata: { author },
    },
  }: PersonalInformationQuery = useStaticQuery(graphql`
    query PersonalInformationQuery {
      avatar: file(relativePath: { eq: "avatar-square.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <Flex alignItems="center">
      <Box p={3} flex="1">
        <Heading mb={3} fontSize={5}>
          {author}
        </Heading>
        <Box>
          <Heading as="h3" fontSize={3} mb={3}>
            PhD student in the{' '}
            <Link href="https://vision.ee.ethz.ch/">Computer Vision Lab</Link> @{' '}
            <Link href="https://ethz.ch/en.html">ETH Zurich</Link>
          </Heading>
          <Text variant="description" fontSize={2}>
            Since May 2020, I am a PhD student under the supervision of{' '}
            <Link href="https://vision.ee.ethz.ch/people-details.OTAyMzM=.TGlzdC8zMjQ4LC0xOTcxNDY1MTc4.html">
              Prof. Luc Van Gool
            </Link>
            . I am also advised by {' '}
            <Link href="https://martin-danelljan.github.io/">
              Dr. Martin Danelljan
            </Link>. My main research interests are Computer Vision and its applications, especially in the task of image matching. I had the change to do an internship at {' '}<Link href="https://www.microsoft.com/en-us/research/lab/mixed-reality-ai-zurich/">Microsoft Mixed Reality and AI Lab</Link>. 
	    Previously, I obtained a Master’s degree in Mechanical Engineering
            with honors at ETH Zurich. I also conducted an internship at {' '}
            <Link href="https://www.retinai.com/">RetinAI</Link> focused on
            computer vision applied to medical images. 
          </Text>
        </Box>
      </Box>
      <Box m={2} flex="0 0 250px">
        <Avatar
          fixed={avatar?.childImageSharp?.fixed!}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </Box>
    </Flex>
  );
};

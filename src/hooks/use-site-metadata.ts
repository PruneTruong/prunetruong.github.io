import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetadataQuery_site_siteMetadata } from '../types/graphql';

const useSiteMetadata: () => SiteMetadataQuery_site_siteMetadata = () => {
  const data = useStaticQuery(graphql`
      query SiteMetadataQuery {
          site {
              siteMetadata {
                  siteTitle
                  author

                  social {
                      twitter
                      linkedin
                      github
                  }
              }
          }
      }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;

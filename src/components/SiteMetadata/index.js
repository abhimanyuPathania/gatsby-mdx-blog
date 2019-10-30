import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const GET_METADATA = graphql`
  {
    site {
      siteMetadata {
        title
        description
        canonicalUrl
        author
      }
    }
  }
`;

const SiteMetadata = () => {
  const {
    site: {
      siteMetadata: { title, author, description, canonicalUrl },
    },
  } = useStaticQuery(GET_METADATA);

  return (
    <Helmet defaultTitle={title} htmlAttributes={{ lang: 'en' }}>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={description}></meta>
      <meta name="author" content={author}></meta>
    </Helmet>
  );
};

export default SiteMetadata;

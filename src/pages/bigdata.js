import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const BigData = ({ data }) => (
  <Layout>
    <Head pageTitle={data.bigdataJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.bigdataJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

BigData.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BigData;

export const query = graphql`
  query BigDataQuery {
    bigdataJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

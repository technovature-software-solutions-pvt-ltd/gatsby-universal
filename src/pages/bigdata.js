import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import { MDXRenderer } from "gatsby-plugin-mdx";


const BigData = ({ data }) => (
  <Layout>
    <Head pageTitle={data.bigdataJson.title} />
    <Box>
        <MDXRenderer>{data.bigdataJson.content.mdx.body}</MDXRenderer>
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
        mdx {
          body
        }
      }
    }
  }
`;

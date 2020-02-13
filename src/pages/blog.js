import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import { MDXRenderer } from "gatsby-plugin-mdx";

const Blog = ({ data }) => (
  <Layout>
    <Head pageTitle={data.blogJson.title} />
    <Box>
        <MDXRenderer>{data.blogJson.content.mdx.body}</MDXRenderer>  
    </Box>
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Blog;

export const query = graphql`
  query BlogQuery {
    blogJson {
      title
      content {
        mdx {
          body
        }
      }
    }
  }
`;

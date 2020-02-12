import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { Title, Copy } from './item.css';

const Item = ({ title, copy, image }) => (
  <figure>
  <Link to={`/${title}/`} style={{ textDecoration: 'none' }}>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
  </Link>
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;

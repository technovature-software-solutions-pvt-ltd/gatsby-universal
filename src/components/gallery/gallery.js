import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Link } from 'gatsby';
import { Container } from './gallery.css';

const Gallery = ({ items }) => (
  <Container>
    {items.map((item, i) => (
    <Link to="/" style={{ textDecoration: 'none' }}>  <Item {...item} key={i} /> </Link>
    ))}
  </Container>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;

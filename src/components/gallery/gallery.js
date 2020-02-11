import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Link } from 'gatsby';
import { Container } from './gallery.css';

const Gallery = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;

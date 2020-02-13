import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import Helmet from 'react-helmet'


const Nav = () => (
  <Container>
  <Helmet>
  <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
  </Helmet>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <a href="https://github.com/jnsrikanth">GitHub</a>
      </li>
    </ul>
  </Container>
);

export default Nav;

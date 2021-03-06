import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-family: 'Montserrat', sans-serif;
      font-size: 1.0rem;
      font-weight: 400;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;

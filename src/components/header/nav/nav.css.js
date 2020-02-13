import styled from 'styled-components';
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-family: 'Montserrat', sans-serif;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;

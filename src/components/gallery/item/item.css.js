import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 1rem 0.5rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 1rem 1rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

import styled from '@emotion/styled';

export const ListCast = styled.ul`
  list-style-type: none;
`;

export const DetailsItem = styled.li`
  margin-bottom: ${props => props.theme.spacing(2.5)};
`;

export const InfoName = styled.p`
  font-weight: 600;
  font-size: ${props => props.theme.fontSize.m};
  margin-bottom: ${props => props.theme.spacing(2.5)};
`;

export const InfoCharacter = styled.p`
  font-size: ${props => props.theme.fontSize.m};
`;

export const CastImage = styled.img`
  width: ${props => props.theme.spacing(37.5)};
`;

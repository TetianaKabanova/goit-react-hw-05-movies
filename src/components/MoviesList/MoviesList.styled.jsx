import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ListMovies = styled.ul`
  list-style-type: none;
`;

export const MoviesItem = styled.li`
  font-weight: 600;
  font-size: ${props => props.theme.fontSize.m};
  margin-bottom: ${props => props.theme.spacing(2.5)};
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.dark};

  &:hover {
    color: ${props => props.theme.colors.success};
    border-bottom: 1px solid ${props => props.theme.colors.success};
  }
`;

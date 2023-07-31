import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MoviesListContainer = styled.div`
  padding: ${props => props.theme.spacing(3)};
`;

export const ListMovies = styled.ul`
  display: flex;
  list-style: none;
  gap: ${props => props.theme.spacing(4)};
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieImageLink = styled.li`
  width: 224px;
  height: 324px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #0000 63.48%, #000000e6 92.16%);
    border-radius: 5px;
    position: absolute;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.accent};

  &:hover {
    color: ${props => props.theme.colors.success};
    border-bottom: 1px solid ${props => props.theme.colors.success};
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  max-width: 100%;
  :hover {
    scale: 1.1;
  }
`;

export const MovieTitle = styled.h3`
  position: absolute;
  bottom: 0;
  padding-left: ${props => props.theme.spacing(2.5)};
  padding-right: ${props => props.theme.spacing(2.5)};
  color: ${props => props.theme.colors.white};
`;

export const MovieItem = styled.li``;

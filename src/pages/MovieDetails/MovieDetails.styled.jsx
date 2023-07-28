import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieDetailsWrapper = styled.div`
  padding: 15px;
`;

export const MovieContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MovieImage = styled.img`
  width: ${props => props.theme.spacing(75)};
`;

export const MovieDetailsContainer = styled.div`
  margin-left: ${props => props.theme.spacing(5)};
`;

export const MovieTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.l};
`;

export const MovieUserScore = styled.p`
  font-size: ${props => props.theme.fontSize.m};
  font-weight: 600;
`;

export const MovieOverview = styled.p`
  font-size: ${props => props.theme.fontSize.m};
`;

export const GenresContainer = styled.div`
  margin-top: ${props => props.theme.spacing(2.5)};
`;

export const GenresList = styled.ul`
  list-style-type: none;
`;

export const GenresItem = styled.li`
  display: inline-block;
  margin-right: ${props => props.theme.spacing(2.5)};
  font-size: ${props => props.theme.fontSize.s};
  line-height: ${props => props.theme.spacing(4.5)};
`;

export const AdditionalInfoContainer = styled.div`
  margin-top: ${props => props.theme.spacing(5)};
`;

export const AdditionalInfoTitle = styled.h3`
  font-size: ${props => props.theme.fontSize.m};
`;

export const DetailsInfo = styled.ul`
  list-style-type: none;
`;

export const DetailsItem = styled.li`
  font-weight: 600;
  font-size: ${props => props.theme.fontSize.m};
  margin-bottom: ${props => props.theme.spacing(2.5)};
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.white};

  &.active {
    color: ${props => props.theme.colors.success};
    border-bottom: 1px solid ${props => props.theme.colors.success};
  }
`;

export const BackLink = styled(NavLink)`
  color: ${props => props.theme.colors.accent};
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.l};
  margin-bottom: ${props => props.theme.spacing(5)};
`;

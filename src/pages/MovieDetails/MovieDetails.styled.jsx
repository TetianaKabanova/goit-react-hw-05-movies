import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieDetailsWrapper = styled.div`
  padding: ${props => props.theme.spacing(4)};
`;

export const MovieContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing(2)};
  margin-top: ${props => props.theme.spacing(4)};
`;

export const MovieImage = styled.img`
  width: ${props => props.theme.spacing(75)};
`;

export const MovieDetailsContainer = styled.div`
  margin-left: ${props => props.theme.spacing(5)};
`;

export const MovieTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.l};
  color: ${props => props.theme.colors.accent};
`;

export const MovieUserScore = styled.p`
  font-size: ${props => props.theme.fontSize.m};
  font-weight: 600;
`;

export const MovieOverview = styled.p`
  font-size: ${props => props.theme.fontSize.m};
`;

export const OverviewTitle = styled.h2`
  font-size: ${props => props.theme.fontSize.m};
  color: ${props => props.theme.colors.accent};
`;

export const GenresContainer = styled.div`
  margin-top: ${props => props.theme.spacing(2.5)};
`;

export const GenresTitle = styled.h2`
  font-size: ${props => props.theme.fontSize.m};
  color: ${props => props.theme.colors.accent};
`;

export const GenresList = styled.ul`
  list-style-type: none;
`;

export const Genres = styled.p``;

export const AdditionalInfoContainer = styled.div`
  margin-top: ${props => props.theme.spacing(4)};
`;

export const AdditionalInfoTitle = styled.h2`
  font-size: ${props => props.theme.fontSize.m};
  color: ${props => props.theme.colors.accent};
`;

export const DetailsInfo = styled.ul`
  list-style-type: none;
`;

export const DetailsItem = styled.li`
  font-weight: 600;
  font-size: ${props => props.theme.fontSize.m};
  margin-bottom: ${props => props.theme.spacing(2.5)};
`;

export const AdditionalInfoLink = styled(NavLink)`
  color: ${props => props.theme.colors.accent};

  &.active {
    color: ${props => props.theme.colors.primary};
  }
`;

export const BackLink = styled(NavLink)`
  color: ${props => props.theme.colors.accent};
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.m};
`;

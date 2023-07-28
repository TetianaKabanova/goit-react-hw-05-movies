import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${props => props.theme.spacing(16)};
  padding-right: ${props => props.theme.spacing(4)};
  padding-left: ${props => props.theme.spacing(4)};
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
  background: ${props => props.theme.colors.mainBackground};
  box-shadow: ${props => props.theme.boxShadow.boxShadow};
`;

export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const Link = styled(NavLink)`
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  border-radius: ${props => props.theme.spacing(8)};
  border: 1px solid #fff;
  border-spacing: 0;
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  padding-top: ${props => props.theme.spacing()};
  padding-bottom: ${props => props.theme.spacing()};

  &.active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.white};
  }
`;

import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  padding: ${props => props.theme.spacing(4)};
`;

export const HomeTitle = styled.h1`
  color: ${props => props.theme.colors.accent};
  text-align: center;
`;

export const HomeList = styled.ul`
  display: flex;
  list-style: none;
  gap: ${props => props.theme.spacing(4)};
  flex-wrap: wrap;
  justify-content: center;
`;

export const HomeLink = styled.li`
  width: 224px;
  height: 324px;
  cursor: pointer;
  border-radius: 5px;
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

export const Image = styled.img`
  border-radius: 5px;
  max-width: 100%;
`;

export const MovieTitle = styled.p`
  position: absolute;
  bottom: 0;
  padding-left: ${props => props.theme.spacing(2.5)};
  padding-right: ${props => props.theme.spacing(2.5)};
  color: ${props => props.theme.colors.white};
`;

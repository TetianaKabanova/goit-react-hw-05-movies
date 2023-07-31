import styled from '@emotion/styled';

export const CastContainer = styled.div`
  padding: ${props => props.theme.spacing(3)};
`;

export const ListCast = styled.ul`
  display: flex;
  list-style: none;
  gap: ${props => props.theme.spacing(5)};
  flex-wrap: wrap;
  justify-content: center;
`;

export const DetailsItem = styled.li`
  width: 150px;
  height: 200px;
  border-radius: 5px;
  position: relative;
  margin-bottom: ${props => props.theme.spacing(24)};
`;

export const InfoName = styled.p`
  font-weight: 600;
  font-size: ${props => props.theme.fontSize.m};
  margin: ${props => props.theme.spacing(2.5)};
  color: ${props => props.theme.colors.accent};
`;

export const InfoCharacter = styled.p`
  font-weight: 500;
  font-size: ${props => props.theme.fontSize.s};
  color: ${props => props.theme.colors.accent};
  margin: ${props => props.theme.spacing(2.5)};
`;

export const CastImage = styled.img`
  border-radius: 5px;
  max-width: 100%;
  :hover {
    scale: 1.1;
  }
`;

export const NoCastInfo = styled.p`
  font-weight: 500;
  font-size: ${props => props.theme.fontSize.l};
  color: ${props => props.theme.colors.accent};
  text-align: center;
`;

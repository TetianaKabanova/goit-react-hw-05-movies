import styled from '@emotion/styled';

export const Alert = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.fontSize.s};
  color: ${props => props.theme.colors.dark};
  font-weight: 700;
`;

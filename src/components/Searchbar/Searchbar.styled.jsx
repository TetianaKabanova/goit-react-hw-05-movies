import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing(4)};
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${props => props.theme.spacing(150)};
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.spacing(0.75)};
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.grey};
`;

export const Span = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SubmitButton = styled.button`
  width: ${props => props.theme.spacing(12)};
  height: ${props => props.theme.spacing(12)};
  border: none;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;

  & svg {
    width: ${props => props.theme.spacing(6.5)};
    height: ${props => props.theme.spacing(6.5)};
    fill: ${props => props.theme.colors.secondary};
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${props => props.theme.fontSize.m};
  border: none;
  outline: none;
  padding-left: ${props => props.theme.spacing(1.5)};
  padding-right: ${props => props.theme.spacing(1.5)};

  ::placeholder {
    font: inherit;
    font-size: ${props => props.theme.fontSize.m};
  }
`;

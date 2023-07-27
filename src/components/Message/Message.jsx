import PropTypes from 'prop-types';
import { Alert } from './Message.styled';

export function Message({ children }) {
  return (
    <Alert role="alert">
      <h1>{children}</h1>
    </Alert>
  );
}

Message.propTypes = {
  children: PropTypes.string.isRequired,
};

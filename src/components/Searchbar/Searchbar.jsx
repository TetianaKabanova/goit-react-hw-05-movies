import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';
import {
  Wrapper,
  Form,
  Input,
  SubmitButton,
  Icon,
  Span,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      toast.warning('Please, enter something to search.');
    }

    const data = e.target.elements.searchQuery.value.trim();

    onSubmit(data);
    setInputValue('');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="searchQuery"
          placeholder="Search movies"
          value={inputValue}
          onChange={handleChange}
        />
        <SubmitButton type="submit">
          <Icon>
            <AiOutlineSearch />
          </Icon>
          <Span>Search</Span>
        </SubmitButton>
      </Form>
    </Wrapper>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

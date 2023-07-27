import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { ListMovies, MoviesItem, Link } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ListMovies>
        {movies.map(movie => (
          <MoviesItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </MoviesItem>
        ))}
      </ListMovies>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

import { Link, useLocation } from 'react-router-dom';
import { ListMovies, MovieItem } from './MoviesList.styled';

function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <>
      <ListMovies>
        {movies?.map(movie => (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </MovieItem>
        ))}
      </ListMovies>
    </>
  );
}

export default MoviesList;

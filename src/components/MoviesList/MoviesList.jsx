import { Link, useLocation } from 'react-router-dom';
import {
  Image,
  ListMovies,
  MovieImageLink,
  MovieTitle,
  MoviesListContainer,
} from './MoviesList.styled';

import poster from '../../components/images/coming soon.jpg';

const getImageUrl = path => {
  return path ? `https://image.tmdb.org/t/p/w200/${path}` : poster;
};

function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <MoviesListContainer>
      <ListMovies>
        {movies?.map(movie => (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <MovieImageLink>
              <Image
                src={getImageUrl(movie.poster_path)}
                alt={movie.title}
                width={224}
                height={324}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieImageLink>
          </Link>
        ))}
      </ListMovies>
    </MoviesListContainer>
  );
}

export default MoviesList;

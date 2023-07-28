import Loader from 'components/Loader/Loader';
import {
  errorMessage,
  notificationOptions,
} from 'components/Notification/Notification';
import { getTrendingMovies } from 'components/api/api';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  HomeContainer,
  HomeLink,
  HomeList,
  HomeTitle,
  Image,
  MovieTitle,
} from './Home.styled';
import { Link } from 'react-router-dom';
import poster from '../../components/images/coming soon.jpg';

function Home() {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const results = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        toast.error(`${errorMessage}`, notificationOptions);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  const getImageUrl = path => {
    return path ? `https://image.tmdb.org/t/p/w200/${path}` : poster;
  };

  return (
    <HomeContainer>
      <HomeTitle>Trending today</HomeTitle>
      <HomeList>
        {movies?.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <HomeLink>
              <Image
                src={getImageUrl(movie.poster_path)}
                alt={movie.title}
                width={224}
                height={325}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </HomeLink>
          </Link>
        ))}
      </HomeList>
      {isLoading && <Loader />}
    </HomeContainer>
  );
}

export default Home;

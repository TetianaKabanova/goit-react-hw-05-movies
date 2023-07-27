import Loader from 'components/Loader/Loader';
import { Message } from 'components/Message/Message';
import MoviesList from 'components/MoviesList/MoviesList';
import {
  errorMessage,
  notificationOptions,
} from 'components/Notification/Notification';
import { getTrendingMovies } from 'components/api/api';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function Home() {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const results = await getTrendingMovies();
        setMovies(results);
        setError(null);
      } catch (error) {
        toast.error(`${errorMessage}`, notificationOptions);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <>
        <Message>{'Trending today'}</Message>
        <MoviesList movies={movies} />

        {isLoading && <Loader />}
      </>
    </div>
  );
}

export default Home;

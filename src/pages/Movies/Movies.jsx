import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import {
  errorMessage,
  notificationOptions,
} from 'components/Notification/Notification';
import Searchbar from 'components/Searchbar/Searchbar';
import { getSearchMovie } from 'components/api/api';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Movies() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) return;

    async function SearchMovies() {
      try {
        setIsLoading(true);
        const results = await getSearchMovie(searchQuery);
        setSearchMovies(results);
      } catch (error) {
        toast.error(`${errorMessage}`, notificationOptions);
      } finally {
        setIsLoading(false);
      }
    }
    SearchMovies();
  }, [searchQuery]);

  const handleSubmitSearchTerm = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <h1>Movies</h1>
      <>
        <Searchbar onSubmit={handleSubmitSearchTerm} />
        {isLoading && <Loader />}
        {searchMovies && <MoviesList movies={searchMovies} />}
      </>
    </div>
  );
}

export default Movies;

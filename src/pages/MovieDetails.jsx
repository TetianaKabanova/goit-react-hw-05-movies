import { Loader } from 'components/Loader/Loader';
import { notificationOptions } from 'components/Notification/Notification';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async id => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        const data = await response.json();
        setMovieDetails(data);
        toast.success(
          'Movie details were successfully fetched!',
          notificationOptions
        );
      } catch (error) {
        setError(error.message);
        toast.error(error.message, notificationOptions);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);
  return (
    <div>
      MovieDetails
      {error !== null &&
        toast.error(
          `Oops, something went wrong. Please try again.`,
          notificationOptions
        )}
      {isLoading && <Loader />}
      <div>
        <NavLink to="cast">Cast</NavLink>
      </div>
      <ToastContainer />;
    </div>
  );
};

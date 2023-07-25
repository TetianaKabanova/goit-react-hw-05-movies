import { Loader } from 'components/Loader/Loader';
import { notificationOptions } from 'components/Notification/Notification';
import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import Cast from './Cast';
// import Reviews from './Reviews';
const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

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
      <h1>MovieDetails</h1>
      <Link to={backLink.current}>Go back</Link>
      {error !== null &&
        toast.error(
          `Oops, something went wrong. Please try again.`,
          notificationOptions
        )}
      {isLoading && <Loader />}
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
      <ToastContainer />;
    </div>
  );
};

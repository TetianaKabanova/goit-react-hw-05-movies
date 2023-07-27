import { Loader } from 'components/Loader/Loader';
import { notificationOptions } from 'components/Notification/Notification';
import { getMovieDetails } from 'components/api/api';
import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {
  AdditionalInfoContainer,
  AdditionalInfoTitle,
  DetailsInfo,
  DetailsItem,
  GenresContainer,
  GenresItem,
  GenresList,
  MovieContainer,
  MovieDetailsContainer,
  MovieImage,
  MovieOverview,
  MovieTitle,
  MovieUserScore,
} from './MovieDetails.styled';

const LazyReviews = lazy(() => import('../Reviews'));
const LazyCast = lazy(() => import('../Cast/Cast'));

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
        toast.error(error.message, notificationOptions);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieDetails;

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
      {{
        title,
        release_date,
        popularity,
        overview,
        genres,
        poster_path,
        original_title,
      } && (
        <MovieContainer>
          <MovieImage
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://crawfordroofing.com.au/wp-content/uploads/2018/04/No-image-available.jpg`
            }
            alt={original_title}
          />
          <MovieDetailsContainer>
            <MovieTitle>
              {title} ({release_date && release_date.slice(0, 4)})
            </MovieTitle>
            <MovieUserScore>User score: {popularity}</MovieUserScore>
            <h2>Overview</h2>
            <MovieOverview>{overview}</MovieOverview>
            <h2>Genres</h2>
            {genres && genres.length > 0 && (
              <GenresContainer>
                <GenresList>
                  {genres.map(genre => (
                    <GenresItem key={genre.id}>{genre.name}</GenresItem>
                  ))}
                </GenresList>
              </GenresContainer>
            )}
          </MovieDetailsContainer>
        </MovieContainer>
      )}

      <AdditionalInfoContainer>
        <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
        <DetailsInfo>
          <DetailsItem>
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
          </DetailsItem>
          <DetailsItem>
            <Link to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </Link>
          </DetailsItem>
        </DetailsInfo>

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="cast" element={<LazyCast />} />
            <Route path="reviews" element={<LazyReviews />} />
          </Routes>
        </Suspense>
      </AdditionalInfoContainer>
    </div>
  );
};

export default MovieDetails;

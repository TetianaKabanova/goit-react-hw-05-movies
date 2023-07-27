import Loader from 'components/Loader/Loader';
import {
  errorMessage,
  notificationOptions,
} from 'components/Notification/Notification';
import { getMovieDetails } from 'components/api/api';
import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
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

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const locationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) return;

    async function fetchMovieDetails() {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
        toast.error(`${errorMessage}`, notificationOptions);
      } finally {
        setIsLoading(false);
      }
    }

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
      <>
        <Link to={backLink.current}>Go back</Link>
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
              <Link to="cast" state={{ from: locationRef.current }}>
                Cast
              </Link>
            </DetailsItem>
            <DetailsItem>
              <Link to="reviews" state={{ from: locationRef.current }}>
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
      </>
    </div>
  );
}

export default MovieDetails;

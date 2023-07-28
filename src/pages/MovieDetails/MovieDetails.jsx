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
  BackLink,
  DetailsInfo,
  DetailsItem,
  GenresContainer,
  GenresItem,
  GenresList,
  MovieContainer,
  MovieDetailsContainer,
  MovieDetailsWrapper,
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
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;

    async function fetchMovieDetails() {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
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

  const getUserScore = score => {
    return Math.round(score);
  };

  return (
    <MovieDetailsWrapper>
      <BackLink to={backLinkHref.current}>Go back</BackLink>

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
            <MovieUserScore>
              User score: {getUserScore(movieDetails.vote_average)}%
            </MovieUserScore>
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
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </DetailsItem>
          <DetailsItem>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </DetailsItem>
        </DetailsInfo>

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="cast" element={<LazyCast />} />
            <Route path="reviews" element={<LazyReviews />} />
          </Routes>
        </Suspense>
      </AdditionalInfoContainer>
    </MovieDetailsWrapper>
  );
}

export default MovieDetails;

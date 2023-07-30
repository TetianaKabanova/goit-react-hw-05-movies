import Loader from 'components/Loader/Loader';
import {
  errorMessage,
  notificationOptions,
} from 'components/Notification/Notification';
import { getMovieDetails } from 'components/api/api';
import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  AdditionalInfoLink,
  AdditionalInfoTitle,
  BackLink,
  DetailsInfo,
  DetailsItem,
  Genres,
  GenresTitle,
  MovieContainer,
  MovieDetailsContainer,
  MovieDetailsWrapper,
  MovieImage,
  MovieOverview,
  MovieTitle,
  MovieUserScore,
  OverviewTitle,
} from './MovieDetails.styled';

const LazyReviews = lazy(() => import('../Reviews/Reviews'));
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
          <div>
            <MovieImage
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `https://crawfordroofing.com.au/wp-content/uploads/2018/04/No-image-available.jpg`
              }
              alt={original_title}
            />
          </div>

          <MovieDetailsContainer>
            <MovieTitle>
              {title} ({release_date && release_date.slice(0, 4)})
            </MovieTitle>
            <MovieUserScore>
              User score: {getUserScore(movieDetails.vote_average)}%
            </MovieUserScore>
            <OverviewTitle>Overview</OverviewTitle>
            <MovieOverview>{overview}</MovieOverview>
            <GenresTitle>Genres</GenresTitle>
            <Genres>{genres.map(genre => genre.name).join(', ')}</Genres>

            <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
            <DetailsInfo>
              <DetailsItem>
                <AdditionalInfoLink to={`/movies/${movieId}/cast`}>
                  Cast
                </AdditionalInfoLink>
              </DetailsItem>
              <DetailsItem>
                <AdditionalInfoLink to={`/movies/${movieId}/reviews`}>
                  Reviews
                </AdditionalInfoLink>
              </DetailsItem>
            </DetailsInfo>
          </MovieDetailsContainer>
        </MovieContainer>
      )}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<LazyCast />} />
          <Route path="reviews" element={<LazyReviews />} />
        </Routes>
      </Suspense>
    </MovieDetailsWrapper>
  );
}

export default MovieDetails;

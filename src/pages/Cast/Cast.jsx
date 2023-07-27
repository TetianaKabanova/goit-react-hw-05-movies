import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieCast } from 'components/api/api';
import { Loader } from 'components/Loader/Loader';
import {
  CastImage,
  DetailsItem,
  InfoCharacter,
  InfoName,
  ListCast,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    async function fetchMovieCast() {
      try {
        setIsLoading(true);
        const cast = await getMovieCast(movieId);

        setCast(cast);
        setError(null);
      } catch (error) {
        toast.error('Oops, something went wrong. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <h1>Cast</h1>
      <>
        {isLoading && <Loader />}

        <ListCast>
          {cast.map(({ id, profile_path, original_name, name, character }) => (
            <DetailsItem key={id}>
              <CastImage
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://crawfordroofing.com.au/wp-content/uploads/2018/04/No-image-available.jpg`
                }
                alt={original_name}
              />
              <InfoName>{name}</InfoName>
              <InfoCharacter>Character: {character}</InfoCharacter>
            </DetailsItem>
          ))}
        </ListCast>
        {cast.length === 0 && (
          <div>Sorry, there is no information about the actors.</div>
        )}
      </>
    </div>
  );
};

export default Cast;

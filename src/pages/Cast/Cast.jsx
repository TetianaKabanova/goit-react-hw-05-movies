import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getMovieCast } from 'components/api/api';
import Loader from 'components/Loader/Loader';
import {
  CastContainer,
  CastImage,
  DetailsItem,
  InfoCharacter,
  InfoName,
  ListCast,
  NoCastInfo,
} from './Cast.styled';
import {
  errorMessage,
  notificationOptions,
} from 'components/Notification/Notification';

import noImageAvailable from 'components/images/NoImageAvailable.jpg';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    async function fetchMovieCast() {
      try {
        setIsLoading(true);
        const cast = await getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        toast.error(`${errorMessage}`, notificationOptions);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieCast();
  }, [movieId]);

  const getPhotoUrl = path => {
    return path ? `https://image.tmdb.org/t/p/w200/${path}` : noImageAvailable;
  };

  return (
    <CastContainer>
      {isLoading && <Loader />}
      {cast.length > 0 ? (
        <ListCast>
          {cast.map(({ id, profile_path, original_name, name, character }) => (
            <DetailsItem key={id}>
              <CastImage
                src={getPhotoUrl(profile_path)}
                alt={original_name}
                width={150}
                height={200}
              />
              <InfoName>{name}</InfoName>
              <InfoCharacter>Character: {character}</InfoCharacter>
            </DetailsItem>
          ))}
        </ListCast>
      ) : (
        <NoCastInfo>
          Sorry, there is no information about the actors.
        </NoCastInfo>
      )}
      <ToastContainer />
    </CastContainer>
  );
}

export default Cast;

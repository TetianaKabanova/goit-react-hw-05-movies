import { getMovieReviews } from 'components/api/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  NoReviews,
  ReviewsAuthor,
  ReviewsContainer,
  ReviewsContent,
  ReviewsLink,
  ReviewsList,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const fetchReviews = await getMovieReviews(movieId);
      setReviews(fetchReviews);
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <ReviewsContainer>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(review => (
            <ReviewsLink key={review.id}>
              <ReviewsAuthor>Author: {review.author}</ReviewsAuthor>
              <ReviewsContent>{review.content}</ReviewsContent>
            </ReviewsLink>
          ))}
        </ReviewsList>
      ) : (
        <NoReviews>Sorry, there are no reviews for this movie.</NoReviews>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;

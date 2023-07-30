import styled from '@emotion/styled';

export const ReviewsContainer = styled.div`
  padding: ${props => props.theme.spacing(4)};
`;

export const ReviewsList = styled.ul`
  display: flex;
  list-style: none;
  gap: ${props => props.theme.spacing(2.5)};
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const ReviewsLink = styled.li`
  width: 100%;
  border-radius: 6px;
  padding: 12px 20px;
  border: 1px solid rgba(227, 227, 227, 1);
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ReviewsAuthor = styled.h3`
  color: ${props => props.theme.colors.accent};
`;

export const ReviewsContent = styled.p``;

export const NoReviews = styled.p`
  /* font-weight: bold; */
  text-align: center;
`;

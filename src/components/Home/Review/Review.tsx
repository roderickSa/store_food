import * as Styled from "./Review.styles";
import ReviewItem from "./ReviewItem/ReviewItem";
import { ReviewType } from "./ReviewItem/ReviewItem.types";
import { data } from "./data/reviews";

const Review = () => {
  return (
    <Styled.Container id="review">
      <Styled.Title>
        our customers <Styled.SubTitle>reviews</Styled.SubTitle>
      </Styled.Title>
      <Styled.BoxContainer>
        {data.map((review: ReviewType) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </Styled.BoxContainer>
    </Styled.Container>
  );
};

export default Review;

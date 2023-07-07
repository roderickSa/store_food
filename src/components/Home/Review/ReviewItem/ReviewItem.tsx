import * as Styled from "./ReviewItem.styles";
import { ReviewProps } from "./ReviewItem.types";

const ReviewItem = ({ review }: ReviewProps) => {
  const { name, description, image } = review;
  return (
    <Styled.Box>
      <Styled.MainImage src={image} title={name} />
      <Styled.Title>{name}</Styled.Title>
      <Styled.ContentStars>
        <Styled.StarFull />
        <Styled.StarFull />
        <Styled.StarFull />
        <Styled.StarFull />
        <Styled.StarEmpty />
      </Styled.ContentStars>
      <Styled.ContentParagraph>{description}</Styled.ContentParagraph>
    </Styled.Box>
  );
};

export default ReviewItem;

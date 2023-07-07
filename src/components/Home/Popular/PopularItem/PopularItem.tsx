import * as Styled from "./PopularItem.styles";
import { PopularProps } from "./PopularItem.types";

const PopularItem = ({ popular }: PopularProps) => {
  const { title, price, image } = popular;
  return (
    <Styled.Box>
      <Styled.LabelPrice>{price}</Styled.LabelPrice>
      <Styled.MainImage src={image} title={title} />
      <Styled.Title>{title}</Styled.Title>
      <Styled.ContentStars>
        <Styled.StarFull />
        <Styled.StarFull />
        <Styled.StarFull />
        <Styled.StarFull />
        <Styled.StarEmpty />
      </Styled.ContentStars>
      <Styled.ButtonLink href="#">order now</Styled.ButtonLink>
    </Styled.Box>
  );
};

export default PopularItem;

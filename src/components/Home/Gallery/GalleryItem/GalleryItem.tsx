import * as Styled from "./GalleryItem.styles";
import { GalleryProps } from "./GalleryItem.types";

const GalleryItem = ({ gallery }: GalleryProps) => {
  const { title, description, image } = gallery;
  return (
    <Styled.Box>
      <Styled.MainImage src={image} title={title} />
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
        <Styled.ContentParagraph>{description}</Styled.ContentParagraph>
        <Styled.ButtonLink href="#">order now</Styled.ButtonLink>
      </Styled.Content>
    </Styled.Box>
  );
};

export default GalleryItem;

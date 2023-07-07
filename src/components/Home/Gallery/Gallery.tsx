import * as Styled from "./Gallery.styles";
import GalleryItem from "./GalleryItem/GalleryItem";
import { GalleryType } from "./GalleryItem/GalleryItem.types";
import { data } from "./data/galleries";

const Gallery = () => {
  return (
    <Styled.Container id="gallery">
      <Styled.Title>
        our food <Styled.SubTitle>gallery</Styled.SubTitle>
      </Styled.Title>
      <Styled.BoxContainer>
        {data.map((gallery: GalleryType) => (
          <GalleryItem key={gallery.id} gallery={gallery} />
        ))}
      </Styled.BoxContainer>
    </Styled.Container>
  );
};

export default Gallery;

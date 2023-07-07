import * as Styled from "./SpecialityItem.styles";
import { SpecilityProps } from "./SpecialityItem.types";

const SpecialityItem = ({ speciality }: SpecilityProps) => {
  const { title, description, mainImage, previewImage } = speciality;
  return (
    <Styled.Box>
      <Styled.MainImage src={mainImage} title={title} />
      <Styled.Content>
        <Styled.PreviewImage src={previewImage} title={title} />
        <Styled.ContentTitle>{title}</Styled.ContentTitle>
        <Styled.ContentParagraph>{description}</Styled.ContentParagraph>
      </Styled.Content>
    </Styled.Box>
  );
};

export default SpecialityItem;

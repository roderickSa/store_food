import * as Styled from "./Speciality.styles";
import SpecialityItem from "./SpecialityItem/SpecialityItem";
import { SpecilityType } from "./SpecialityItem/SpecialityItem.types";
import { data } from "./data/specialities";

const Speciality = () => {
  return (
    <Styled.Container id="speciality">
      <Styled.Title>
        our <Styled.SubTitle>speciality</Styled.SubTitle>
      </Styled.Title>
      <Styled.BoxContainer>
        {data.map((speciality: SpecilityType) => (
          <SpecialityItem key={speciality.title} speciality={speciality} />
        ))}
      </Styled.BoxContainer>
    </Styled.Container>
  );
};

export default Speciality;

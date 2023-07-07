import * as Styled from "./Popular.styles";
import PopularItem from "./PopularItem/PopularItem";
import { PopularType } from "./PopularItem/PopularItem.types";
import { data } from "./data/populars";

const Popular = () => {
  return (
    <Styled.Container id="popular">
      <Styled.Title>
        most <Styled.SubTitle>popular </Styled.SubTitle>foods
      </Styled.Title>
      <Styled.BoxContainer>
        {data.map((popular: PopularType) => (
          <PopularItem key={popular.title} popular={popular} />
        ))}
      </Styled.BoxContainer>
    </Styled.Container>
  );
};

export default Popular;

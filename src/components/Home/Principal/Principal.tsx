import * as Styled from "./Principal.styles";

const Principal = () => {
  return (
    <Styled.Container id="home">
      <Styled.Content>
        <Styled.ContentTitle>food made with love</Styled.ContentTitle>
        <Styled.ContentParagraph>
          Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Ab mollitia
          velit eius nulla consequuntur facilis perferendis incidunt esse quos,
          labore odio temporibus totam officia voluptate similique voluptatem
          hic tenetur. Nulla!
        </Styled.ContentParagraph>
        <Styled.ButtonLink href="#">order now</Styled.ButtonLink>
      </Styled.Content>
      <Styled.ContainerImage>
        <Styled.PrincipalImage />
      </Styled.ContainerImage>
    </Styled.Container>
  );
};

export default Principal;

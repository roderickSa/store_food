import styled from "styled-components";

const Container = styled.div.attrs({ className: "section" })``;

const Title = styled.h1.attrs({ className: "heading" })``;

const SubTitle = styled.span``;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export { Container, Title, SubTitle, BoxContainer };

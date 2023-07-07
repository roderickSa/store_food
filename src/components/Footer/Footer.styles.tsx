import styled from "styled-components";

const Container = styled.div.attrs({ className: "section" })`
  background: #000;
  text-align: center;
`;

const Share = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Credit = styled.h1`
  padding: 2.5rem 1rem;
  color: #fff;
  font-weight: normal;
  font-size: 2rem;
`;

const Dedicated = styled.span`
  color: var(--red);
`;

const ButtonLink = styled.a.attrs({ className: "btn" })``;

export { Container, Share, Credit, Dedicated, ButtonLink };

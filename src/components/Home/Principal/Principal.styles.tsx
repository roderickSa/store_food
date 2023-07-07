import styled, { keyframes } from "styled-components";
import Image from "next/image";
import HomeImg from "~/images/home-img.png";
import HomeBg from "~/images/home-bg.jpg";

const Container = styled.div.attrs({ className: "section" })`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  min-height: 100vh;
  align-items: center;
  background: url(${HomeBg.src}) no-repeat;
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  flex: 1 1 40rem;
  padding-top: 6.5rem;
`;

const ContentTitle = styled.h3`
  font-size: 5rem;
  color: #333;
`;

const ContentParagraph = styled.p`
  font-size: 1.7rem;
  color: #666;
  padding: 1rem 0;
`;

const ContainerImage = styled.div`
  flex: 1 1 40rem;
`;

const float = keyframes`
  0%,
    100% {
        transform: translateY(0rem);
    }
    50% {
        transform: translateY(3rem);
    }
`;

const PrincipalImage = styled((props: any) => (
  <Image {...props} src={HomeImg} alt="burger" priority={true} />
))`
  width: 100%;
  height: 100%;
  padding: 1rem;
  animation: ${float} 3s linear infinite;
`;

const ButtonLink = styled.a.attrs({ className: "btn" })``;

export {
  Container,
  Content,
  ContentTitle,
  ContentParagraph,
  ContainerImage,
  PrincipalImage,
  ButtonLink,
};

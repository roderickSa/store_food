import styled from "styled-components";
import Image from "next/image";

const Box = styled.div`
  flex: 1 1 30rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border: 0.1rem solid rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover .box {
    transform: translateY(100%);
  }

  &:hover .image {
    top: 0;
  }
`;

const MainImage = styled(({ src, title, ...rest }: any) => (
  <Image {...rest} src={src} alt={title} />
)).attrs({ className: "image" })`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: -100%;
  left: 0;
`;

const PreviewImage = styled(({ src, title, ...rest }: any) => (
  <Image {...rest} src={src} alt={title} />
)).attrs({ className: "image" })`
  margin: 1.5rem 0;
`;

const Content = styled.div.attrs({ className: "box" })`
  text-align: center;
  background: #fff;
  padding: 2rem;
`;

const ContentTitle = styled.h3`
  font-size: 2.5rem;
  color: #333;
`;

const ContentParagraph = styled.p`
  font-size: 1.6rem;
  color: #666;
  padding: 1rem 0;
`;

export {
  Box,
  MainImage,
  Content,
  PreviewImage,
  ContentTitle,
  ContentParagraph,
};

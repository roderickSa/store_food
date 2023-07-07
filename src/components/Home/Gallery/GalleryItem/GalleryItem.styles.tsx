import styled from "styled-components";
import Image from "next/image";

const Box = styled.div`
  height: 25rem;
  flex: 1 1 30rem;
  border: 1rem solid #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;

  &:hover .content {
    top: 0;
  }
`;

const MainImage = styled(({ src, title, ...rest }: any) => (
  <Image {...rest} src={src} alt={title} />
))`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Content = styled.div.attrs({ className: "content" })`
  position: absolute;
  top: -100%;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  padding-top: 5rem;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  color: #333;
`;

const ContentParagraph = styled.p`
  font-size: 1.5rem;
  color: #666;
  padding: 1rem 0;
`;

const ButtonLink = styled.a.attrs({ className: "btn" })``;

export { Box, MainImage, Content, Title, ContentParagraph, ButtonLink };

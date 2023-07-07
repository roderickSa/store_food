import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const Box = styled.div`
  text-align: center;
  padding: 2rem;
  border: 1rem solid #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  flex: 1 1 30rem;
  background: #333;
  margin-top: 6rem;
`;

const MainImage = styled(({ src, title, ...rest }: any) => (
  <Image {...rest} src={src} alt={title} />
))`
  height: 12rem;
  width: 12rem;
  border-radius: 50%;
  border: 1rem solid #fff;
  margin-top: -8rem;
  object-fit: cover;
`;

const ContentStars = styled.div``;

const Title = styled.h3`
  font-size: 2.5rem;
  color: #fff;
  padding: 0.5rem 0;
`;

const StarFull = styled((props: any) => (
  <FontAwesomeIcon {...props} icon={faStar} />
))`
  font-size: 2rem;
  color: var(--red);
  padding: 0.5rem 0;
`;

const StarEmpty = styled((props: any) => (
  <FontAwesomeIcon {...props} icon={farStar} />
))`
  font-size: 2rem;
  color: var(--red);
  padding: 0.5rem 0;
`;

const ContentParagraph = styled.p`
  font-size: 1.5rem;
  color: #eee;
  padding: 1rem 0;
`;

export {
  Box,
  MainImage,
  ContentStars,
  Title,
  ContentParagraph,
  StarFull,
  StarEmpty,
};

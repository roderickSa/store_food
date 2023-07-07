import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const Box = styled.div`
  padding: 2rem;
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border: 0.1rem solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  text-align: center;
  flex: 1 1 30rem;
  position: relative;
`;

const MainImage = styled(({ src, title, ...rest }: any) => (
  <Image {...rest} src={src} alt={title} />
)).attrs({ className: "image" })`
  height: 25rem;
  object-fit: cover;
  width: 100%;
  border-radius: 0.5rem;
`;

const LabelPrice = styled.span`
  position: absolute;
  top: 3rem;
  left: 3rem;
  background: var(--red);
  color: #fff;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

const Title = styled.h3`
  color: #333;
  font-size: 2.5rem;
  padding-top: 1rem;
`;

const ContentStars = styled.div``;

const StarFull = styled((props: any) => (
  <FontAwesomeIcon {...props} icon={faStar} />
))`
  color: gold;
  font-size: 1.7rem;
  padding-top: 1rem 0.1rem;
`;

const StarEmpty = styled((props: any) => (
  <FontAwesomeIcon {...props} icon={farStar} />
))`
  color: gold;
  font-size: 1.7rem;
  padding-top: 1rem 0.1rem;
`;

const ButtonLink = styled.a.attrs({ className: "btn" })``;

export {
  Box,
  MainImage,
  LabelPrice,
  ContentStars,
  Title,
  StarFull,
  StarEmpty,
  ButtonLink,
};

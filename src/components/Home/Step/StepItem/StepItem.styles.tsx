import styled from "styled-components";
import Image from "next/image";

const Box = styled.div`
  flex: 1 1 25rem;
  padding: 1rem;
  text-align: center;
`;

const MainImage = styled(({ src, title, ...rest }: any) => (
  <Image {...rest} src={src} alt={title} />
))`
object-fit: cover;
  border-radius: 50%;
  border: 1rem solid #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  font-size: 3rem;
  color: #333;
  padding: 1rem;
`;

export { Box, MainImage, Title };

import Image from "next/image";
import styled from "styled-components";
import Loader from "~/images/loader.gif";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  &.fade-out {
    top: -120%;
  }
`;

const LoaderImage = styled((props: any) => (
  <Image {...props} src={Loader} alt="burger" priority={true} />
))``;

export { Container, LoaderImage };

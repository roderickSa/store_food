import { useEffect, useRef } from "react";
import * as Styled from "./Loader.styles";

let timerId: any;

const Loader = () => {
  const LoaderItem = useRef<HTMLDivElement>(null);

  const loaderAction = () => {
    LoaderItem.current?.classList.add("fade-out");
  };

  useEffect(() => {
    timerId = setTimeout(loaderAction, 2000);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <Styled.Container ref={LoaderItem}>
      <Styled.LoaderImage />
    </Styled.Container>
  );
};

export default Loader;

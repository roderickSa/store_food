import { useEffect, useRef } from "react";
import * as Styled from "./ScrollTop.styles";

const ScrollTop = () => {
  const scrollItem = useRef<HTMLLinkElement>(null);

  const onScrollPage = () => {
    if (window.scrollY > 60) {
      return scrollItem.current?.classList.add("active");
    }
    scrollItem.current?.classList.remove("active");
  };

  useEffect(() => {
    document.addEventListener("scroll", onScrollPage);
    return () => document.removeEventListener("scroll", onScrollPage);
  }, []);

  return (
    <Styled.ScrollTop ref={scrollItem} href="#home">
      <Styled.ScrollTopIcon />
    </Styled.ScrollTop>
  );
};

export default ScrollTop;

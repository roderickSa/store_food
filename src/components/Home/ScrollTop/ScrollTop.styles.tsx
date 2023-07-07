import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { MutableRefObject } from "react";
import Link from "next/link";

interface IProps {
  href: string;
  ref: MutableRefObject<HTMLLinkElement | null>;
}

const ScrollTop = styled(Link)<IProps>`
  position: fixed;
  top: -120%;
  right: 2rem;
  padding: 0 1rem;
  font-size: 4rem;
  background: var(--red);
  color: #fff;
  border-radius: 0.5rem;
  transition: 1s linear;
  z-index: 1000;

  &.active {
    top: calc(100% - 12rem);
  }
`;

const ScrollTopIcon = styled(() => <FontAwesomeIcon icon={faAngleUp} />)``;

export { ScrollTop, ScrollTopIcon };

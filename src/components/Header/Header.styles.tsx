import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MEDIA_QUERIES_MAX } from "@/constants/responsive";
import { faBars, faUtensils } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Container = styled.div.attrs({ className: "header" })`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 2rem 9%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  :hover {
    color: var(--red);
  }

  @media ${MEDIA_QUERIES_MAX.md} {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #f7f7f7;
    border-top: 0.1rem solid rgba(0, 0, 0, 0.1);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

    .active {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
`;

const NavLink = styled(Link)`
  font-size: 2rem;
  margin-left: 2rem;
  color: #666;

  &::before {
    content: "";
    display: inline-block;
  }

  @media ${MEDIA_QUERIES_MAX.md} {
    margin: 1.5rem;
    padding: 1.5rem;
    display: block;
    border: 0.2rem solid rgba(0, 0, 0, 0.1);
    border-left: 0.5rem solid var(--red);
    background: #fff;
  }
`;

const LinkLogo = styled.a`
  font-size: 2.5rem;
  font-weight: bolder;
  color: #666;
`;

const IconLogo = styled((props: any) => (
  <FontAwesomeIcon {...props} icon={faUtensils} />
))`
  padding-right: 0.5rem;
  color: var(--red);
`;

const MenuBar = styled.div`
  font-size: 3rem;
  cursor: pointer;
  color: #666;
  border: 0.1rem solid #666;
  border-radius: 0.3rem;
  padding: 0.5rem 1.5rem;
  display: none;

  @media ${MEDIA_QUERIES_MAX.md} {
    display: initial;
  }
`;

const IconMenuBar = styled(() => <FontAwesomeIcon icon={faBars} />)``;

export { Container, Nav, NavLink, LinkLogo, IconLogo, MenuBar, IconMenuBar };

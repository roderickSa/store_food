import * as Styled from "./Header.styles";

const Header = () => {
  return (
    <Styled.Container>
      <Styled.LinkLogo href="#">
        <Styled.IconLogo />
        food
      </Styled.LinkLogo>
      <Styled.MenuBar>
        <Styled.IconMenuBar />
      </Styled.MenuBar>
      <Styled.Nav>
        <Styled.NavLink href="#home">home</Styled.NavLink>
        <Styled.NavLink href="#speciality">speciality</Styled.NavLink>
        <Styled.NavLink href="#popular">popular</Styled.NavLink>
        <Styled.NavLink href="#gallery">gallery</Styled.NavLink>
        <Styled.NavLink href="#review">review</Styled.NavLink>
        <Styled.NavLink href="#order">order</Styled.NavLink>
      </Styled.Nav>
    </Styled.Container>
  );
};

export default Header;

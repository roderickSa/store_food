import * as Styled from "./Footer.styles";

const Footer = () => {
  return (
    <Styled.Container>
      <Styled.Share>
        <Styled.ButtonLink className="btn">facebook</Styled.ButtonLink>
        <Styled.ButtonLink className="btn">twitter</Styled.ButtonLink>
        <Styled.ButtonLink className="btn">instagram</Styled.ButtonLink>
        <Styled.ButtonLink className="btn">pinterest</Styled.ButtonLink>
        <Styled.ButtonLink className="btn">linkedin</Styled.ButtonLink>
      </Styled.Share>
      <Styled.Credit>
        created by
        <Styled.Dedicated> replicated by roderick</Styled.Dedicated> | all rights
        reserved!
      </Styled.Credit>
    </Styled.Container>
  );
};

export default Footer;

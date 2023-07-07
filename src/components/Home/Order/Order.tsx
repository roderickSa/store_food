import * as Styled from "./Order.styles";

const Order = () => {
  return (
    <Styled.Container id="order">
      <Styled.Title>
        order <Styled.SubTitle>now</Styled.SubTitle>
      </Styled.Title>
      <Styled.Row>
        <Styled.ContentImage>
          <Styled.FormImage />
        </Styled.ContentImage>
        <Styled.Form>
          <Styled.InputBox>
            <Styled.Input type="text" placeholder="name" />
            <Styled.Input type="email" placeholder="email" />
          </Styled.InputBox>
          <Styled.InputBox>
            <Styled.Input type="number" placeholder="number" />
            <Styled.Input type="text" placeholder="food name" />
          </Styled.InputBox>
          <Styled.Textarea
            placeholder="address"
            name=""
            id=""
            cols={30}
            rows={10}
          ></Styled.Textarea>
          <Styled.Submit type="submit" value="order now" />
        </Styled.Form>
      </Styled.Row>
    </Styled.Container>
  );
};

export default Order;

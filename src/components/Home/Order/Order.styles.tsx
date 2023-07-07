import Image from "next/image";
import styled from "styled-components";
import order_img from "~/images/order-img.jpg";

const Container = styled.div.attrs({ className: "section" })``;

const Title = styled.h1.attrs({ className: "heading" })``;

const SubTitle = styled.span``;

const Row = styled.div`
  padding: 2rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  border-radius: 0.5rem;
`;

const ContentImage = styled.div`
  flex: 1 1 30rem;
`;

const FormImage = styled((props: any) => (
  <Image {...props} src={order_img} alt="form-image" priority={true} />
))`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const Form = styled.div`
  flex: 1 1 50rem;
  padding: 1rem;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Textarea = styled.textarea`
  padding: 1rem;
  margin: 1rem 0;
  font-size: 1.7rem;
  color: #333;
  text-transform: none;
  border: 0.1rem solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  width: 49%;
  width: 100%;
  resize: none;
  height: 15rem;
`;

const Input = styled.input`
  padding: 1rem;
  margin: 1rem 0;
  font-size: 1.7rem;
  color: #333;
  text-transform: none;
  border: 0.1rem solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  width: 49%;
`;

const Submit = styled.input.attrs({ className: "btn" })`
  &:hover {
    background: var(--red);
  }
`;

export {
  Container,
  Title,
  SubTitle,
  Row,
  ContentImage,
  FormImage,
  Form,
  InputBox,
  Textarea,
  Input,
  Submit,
};

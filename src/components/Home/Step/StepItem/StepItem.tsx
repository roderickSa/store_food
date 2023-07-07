import * as Styled from "./StepItem.styles";
import { StepProps } from "./StepItem.types";

const StepItem = ({ step }: StepProps) => {
  const { title, image } = step;
  return (
    <Styled.Box>
      <Styled.MainImage src={image} title={title} />
      <Styled.Title>{title}</Styled.Title>
    </Styled.Box>
  );
};

export default StepItem;

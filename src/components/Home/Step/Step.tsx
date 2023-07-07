import * as Styled from "./Step.styles";
import StepItem from "./StepItem/StepItem";
import { StepType } from "./StepItem/StepItem.types";
import { data } from "./data/steps";

const Step = () => {
  return (
    <Styled.Container>
      {data.map((step: StepType) => (
        <StepItem key={step.title} step={step} />
      ))}
    </Styled.Container>
  );
};

export default Step;

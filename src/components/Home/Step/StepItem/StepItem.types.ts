import { StaticImageData } from "next/image";

interface StepType {
  image: StaticImageData;
  title: string;
}

interface StepProps {
  step: StepType;
}

export type { StepType, StepProps };

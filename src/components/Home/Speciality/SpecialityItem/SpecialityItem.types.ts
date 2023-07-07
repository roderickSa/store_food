import { StaticImageData } from "next/image";

interface SpecilityType {
  mainImage: StaticImageData;
  previewImage: StaticImageData;
  title: string;
  description: string;
}

interface SpecilityProps {
  speciality: SpecilityType;
}

export type { SpecilityType, SpecilityProps };

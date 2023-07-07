import { StaticImageData } from "next/image";

interface ReviewType {
  id: number;
  image: StaticImageData;
  name: string;
  description: string;
}

interface ReviewProps {
  review: ReviewType;
}

export type { ReviewType, ReviewProps };

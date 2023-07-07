import { StaticImageData } from "next/image";

interface PopularType {
  image: StaticImageData;
  title: string;
  price: string;
}

interface PopularProps {
  popular: PopularType;
}

export type { PopularType, PopularProps };

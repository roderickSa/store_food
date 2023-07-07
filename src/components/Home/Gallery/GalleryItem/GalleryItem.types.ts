import { StaticImageData } from "next/image";

interface GalleryType {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
}

interface GalleryProps {
  gallery: GalleryType;
}

export type { GalleryType, GalleryProps };

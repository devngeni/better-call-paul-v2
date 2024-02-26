import { StaticImageData } from "next/image";

export interface DataTypes {
  imagePath: StaticImageData;
  name: string;
  description: string;
  price: number;
}

export interface IntroDataType {
  subtitle: string;
  price: number;
  perMonth?: string;
}

export interface SwipperDataType {
  id: number;
  imageUrl: string;
  width?: number;
  height?: number;
}

export interface TimelineType {
  icon: StaticImageData;
  text: string;
  content: string;
}

export interface FaqType {
  question: string;
  answer: string;
}

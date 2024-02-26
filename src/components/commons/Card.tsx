import {
  CardContainer,
  CardContent,
  CardImage,
  CardNavigation,
  CardRating,
  CardWrapper,
} from "@/styles/commons";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import Chevron from "../../../public/Icons/Chevron";
import { Text } from ".";
import Title from "./Title";
import Rating from "./Rating";
import { PriceDisplay } from "./Price";
import { useRouter } from "next/router";

interface CardProps {
  title: string;
  content: string | undefined;
  price: number;
}

interface ImageProps extends Omit<CardProps, "price"> {
  src: StaticImageData | string;
  alt: string;
  children?: ReactNode;
  additionalStyle?: React.CSSProperties;
  handleClick?: () => void;
  $isActive?: boolean;
  price: number | string;
}

const Card: React.FC<ImageProps> = ({
  title,
  content,
  src,
  alt,
  children,
  additionalStyle,
  handleClick,
  price,
}) => {
  const route = useRouter();
  const handleRouting = (content: string, price: number | any) => {
    if (route.pathname === "/drinks") {
      const url = `https://api.whatsapp.com/send?phone=+254794701568&text=Hello Paul, thirsty for something special. Can I order my favorite drink ${content} at $${price} through your app?`;
      window.open(url);
    } else if (route.pathname === "/private-chef") {
      const url = `https://api.whatsapp.com/send?phone=+254794701568&text=Hello Paul, I’m craving a special dining experience. Can I get a ${content} for $${price} or explore meal prep options?`;
      window.open(url);
    }
  };
  return (
    <CardWrapper
      onClick={() => {
        handleRouting(title, price);
        handleClick && handleClick();
      }}
    >
      <CardImage style={additionalStyle}>
        <Image
          alt={alt}
          src={typeof src === "string" ? "" + src : src}
          height={100}
          width={100}
          priority
          placeholder="blur"
          blurDataURL={String(src)}
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: 1,
          }}
        />
        {children}
      </CardImage>
      <CardContent>
        <Title color="#444" size="18px" $weight="600">
          {title}
        </Title>
        <Text color="#444" size="16px" $weight="400">
          {content}
        </Text>
        <CardRating>
          <Rating name="ratings" value={4} />
          <Text color="#000" size="0.75rem" $weight="400">
            <PriceDisplay price={Number(price)} />
          </Text>
        </CardRating>
        <CardNavigation>
          <Chevron />
        </CardNavigation>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;

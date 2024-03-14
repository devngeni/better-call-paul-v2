import {
  BookButton,
  HotelBtn,
  HotelContainer,
  HotelContent,
  HotelDesc,
  HotelTitle,
  HotelWrapper,
} from "@/styles/commons";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { WhatsAppBtn } from "./BookSection";
import { PriceDisplay } from "./Price";
import styled from "styled-components";
import { useCartDispatch } from "@/context/CartContext";
import { useRouter } from "next/router";
import { usePriceContext } from "@/context";
export const ImageCover = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 15px;
  background-color: #ffefd5;
  overflow: hidden;
  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    mix-blend-mode: multiply;
  }

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

interface HotelProps {
  src: StaticImageData | any;
  content: string;
  price?: number;
  description?: string;
  onClick?: () => void;
  info?: string;
  imageHeight?: number;
  imageWidth?: number;
  backgroundImageColor?: string;
  seeMenuBtn?: boolean;
  seeWhatsappBtn?: boolean;
  handleSeeMenuButtonClick?: () => void;
  WhatsAppBtnText?: any;
}

const SeeMenuBtn = ({ handleSeeMenuButtonClick, btnText, style }: any) => {
  return (
    <BookButton onClick={handleSeeMenuButtonClick} style={style}>
      {btnText}
    </BookButton>
  );
};

export const RenderDescription = (description?: string) => {
  if (!description) return null;

  const parts = description.split(/<\/li>|<li>/);
  const hasLineBreaks = description.includes("<br>");

  if (parts.length > 1) {
    const textBeforeLi = parts[0];
    const listItems = parts
      .slice(1, -1)
      .map((item, index) => item.trim() && <li key={index}>{item}</li>);
    const textAfterLastLi = parts[parts.length - 1].trim();

    return (
      <div>
        <p>{textBeforeLi}</p>
        <div style={{ marginLeft: "5%" }}>
          <ul>{listItems}</ul>
        </div>
        {textAfterLastLi && <p>{textAfterLastLi}</p>}
      </div>
    );
  } else if (hasLineBreaks) {
    const parts = description.split(/<br>/);
    const textBeforeBr = parts[0];
    const textAfterBr = parts[1].trim();

    return (
      <div>
        <p>{textBeforeBr}</p>
        {textAfterBr && <p>{textAfterBr}</p>}
      </div>
    );
  } else {
    return <p>{description}</p>;
  }
};

const Hotel = ({
  src,
  content,
  description,
  price,
  info,
  imageHeight = 220,
  imageWidth = 390,
  seeMenuBtn,
  seeWhatsappBtn,
  handleSeeMenuButtonClick,
  WhatsAppBtnText,
}: HotelProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const dispatch = useCartDispatch();
  const { convertPrice, currency } = usePriceContext();
  const router = useRouter();

  const { slug } = router.query;
  useEffect(() => {
    if (slug === "rentable" || slug === "gift-shop") {
      setIsSend(true);
    }
  }, [slug]);

  if (imageWidth === undefined || imageHeight === undefined) {
    return null;
  }

  const handleBookButtonClick = () => {
    const priceText = price ? ` at ${currency} ${convertPrice(price)}` : "";
    const whatsappText = info || content;
    const url = `https://api.whatsapp.com/send?phone=+254794701568&text=${whatsappText}${priceText}`;
    window.open(url);
  };

  // const getImageUrl = (imageData: StaticImageData): string => {
  //   const defaultImageUrl = "/magical.png";

  //   if (!imageData || !imageData.src) {
  //     return defaultImageUrl;
  //   }

  //   return imageData.src;
  // };

  interface ProductType {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    quantity: number;
  }

  const handleAddToCart = () => {
    const product: ProductType = {
      id: Math.random(),
      name: content,
      price: price || 0,
      image: src,
      category: "Your Category",
      quantity: 1,
    };

    dispatch({
      type: "ADD",
      product,
    });
  };

  return (
    <div>
      <ImageCover>
        <Image src={src} alt="imagePath" fill />
      </ImageCover>
      <HotelContent>
        <HotelTitle>{content}</HotelTitle>
        <HotelDesc>{RenderDescription(description)}</HotelDesc>
        <HotelDesc>
          {price !== undefined ? <PriceDisplay price={price} /> : ""}
        </HotelDesc>
      </HotelContent>
      <HotelBtn>
        {seeMenuBtn && (
          <BookButton
            onClick={handleSeeMenuButtonClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            See Menu
          </BookButton>
        )}
        {!seeWhatsappBtn && (
          <WhatsAppBtn
            handleBookButtonClick={
              isSend ? handleAddToCart : handleBookButtonClick
            }
            book={isSend ? "Add to Cart" : "Message Us"}
          />
        )}
      </HotelBtn>
    </div>
  );
};

export default Hotel;

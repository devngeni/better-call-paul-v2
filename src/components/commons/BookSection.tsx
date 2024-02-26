import {
  BookBox,
  BookButton,
  BookContainer,
  BookContent,
  BookInfo,
  BookPrice,
  BookWrapper
} from "@/styles/commons";
import React from "react";
import { PriceDisplay } from "./Price";
export interface BookSectionProps {
  price: number;
  text?: string;
  book: string;
  info?: string;
}
  
export interface WhatsAppBtnProps {
  handleBookButtonClick: () => void;
  book: string;
  style?: React.CSSProperties;
}

export const WhatsAppBtn = ({
  handleBookButtonClick,
  book,
  style
}: WhatsAppBtnProps) => {
  return (
    <BookButton onClick={handleBookButtonClick} style={style}>
      {book}
    </BookButton>
  );
};

const BookSection: React.FC<BookSectionProps> = ({
  price,
  text,
  book,
  info}) => {
  const handleBookButtonClick = () => {
    const url = `https://api.whatsapp.com/send?phone=+254794701568&text=${info} at $${price}`;
    window.open(url);
  };
 

  return (
    <BookContainer>
      <BookWrapper>
        <BookBox>
          <BookPrice>
            {typeof price === "number" ? <PriceDisplay price={price} /> : null}
          </BookPrice>
          <BookContent>{text}</BookContent>
          <BookInfo>{info}</BookInfo>
        </BookBox>
        <WhatsAppBtn
          handleBookButtonClick={handleBookButtonClick}
          book={book}
        />
      </BookWrapper>
    </BookContainer>
  );
};

export default BookSection;

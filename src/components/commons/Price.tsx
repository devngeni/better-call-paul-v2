import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePriceContext } from "@/context";

const StyledPrice = styled.span`
  color: #000;
  font-family: ${(props) => props.theme.fontFace.fonts.poppins};
  font-size: calc(0.75rem + ((1vw - 0.225rem) * 0.4615));
  font-style: normal;
  font-weight: 400;
`;

type PriceDisplayProps = {
  price: number;
};

// Map currency codes to currency symbols
export const currencySymbolMap: { [key: string]: string } = {
  AED: "د.إ",
  AUD: "$",
  BRL: "R$",
  CAD: "$",
  CHF: "CHF",
  CNY: "¥",
  EUR: "€",
  GBP: "£",
  HKD: "$",
  INR: "₹",
  JPY: "¥",
  KSh: "KSh",
  MXN: "$",
  NZD: "$",
  RUB: "₽",
  SEK: "kr",
  SGD: "$",
  THB: "฿",
  USD: "$",
  ZAR: "R",
};

export const PriceDisplay: React.FC<PriceDisplayProps> = ({ price }) => {
  const { convertPrice, currency } = usePriceContext();
  const [convertedPrice, setConvertedPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConvertedPrice = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await convertPrice(price);
        if (typeof result === 'number') {
          setConvertedPrice(result);
        } else {
          setError('Invalid price conversion result');
        }
      } catch (error) {
        console.error("Error converting price:", error);
        setError('Error converting price');
      } finally {
        setLoading(false);
      }
    };

    fetchConvertedPrice();
  }, [convertPrice, currency, price]);

  if (loading) {
    return <StyledPrice>Loading...</StyledPrice>;
  }

  if (error) {
    return <StyledPrice>{error}</StyledPrice>;
  }

  if (convertedPrice === null) {
    return <StyledPrice>Error converting price</StyledPrice>;
  }

  const currencySymbol = currencySymbolMap[currency] || "KSh";

  return <StyledPrice>{`${currencySymbol} ${convertedPrice.toFixed(2)}`}</StyledPrice>;
};
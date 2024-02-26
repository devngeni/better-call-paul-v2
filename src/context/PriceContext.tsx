import React, { createContext, useContext, useState, useEffect } from "react";
import { LayoutProps } from "@/types";

export type Currency = 
  | "USD" | "KSh" | "EUR" | "JPY" | "GBP"
  | "AUD" | "CAD" | "CNY" | "INR" | "NZD"
  | "BRL" | "MXN" | "ZAR" | "RUB" | "SGD"
  | "AED" | "HKD" | "SEK" | "CHF" | "THB";

const currencyRates: Record<Currency, number> = {
  USD: 1,
  KSh: 154,
  EUR: 0.9,
  JPY: 110,
  GBP: 0.8,
  AUD: 1.4,
  CAD: 1.25,
  CNY: 6.4,
  INR: 74,
  NZD: 1.5,
  BRL: 5.2,
  MXN: 20,
  ZAR: 14.5,
  RUB: 76,
  SGD: 1.35,
  AED: 3.67,
  HKD: 7.8,
  SEK: 9,
  CHF: 0.92,
  THB: 31
};

type PriceContextType = {
  currency: Currency;
  setCurrency: React.Dispatch<React.SetStateAction<Currency>>;
  convertPrice: (price: number) => number;
};

const PriceContext = createContext<PriceContextType>({} as PriceContextType);

export const usePriceContext = () => useContext(PriceContext);

export const PriceProvider: React.FC<LayoutProps> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>("KSh");

  useEffect(() => {
    const savedCurrency = localStorage.getItem("currency") as Currency;
    if (savedCurrency && currencyRates[savedCurrency]) {
      setCurrency(savedCurrency);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  const convertPrice = (price: number): number => {
    const rate = currencyRates[currency];
    return rate ? price * rate : price;
  };

  return (
    <PriceContext.Provider value={{ currency, setCurrency, convertPrice }}>
      {children}
    </PriceContext.Provider>
  );
};

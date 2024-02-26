import React from 'react';
import styled from 'styled-components';
import { Currency, usePriceContext } from "@/context";

const StyledSelect = styled.select`
  padding: 5px;
  border-radius: 6px;
  background-color: #ffa500;
  border: 1px solid #dcdcdc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  color: #000;
  font-family: ${props => props.theme.fontFace.fonts.bcpFont};
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    border-color: #a0a0a0;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 2px 4px rgba(0, 123, 255, 0.25);
  }

  option {
    color: #000;
    font-weight: 600;
    background-color: white;
  }
  @media screen and (max-width: 768px) {
    padding: 2px;
  }
`;

function CurrencySelector() {
  const { currency, setCurrency } = usePriceContext();

  const currencies = [
    "AED", "AUD", "BRL", "CAD", "CHF", "CNY", "EUR", "GBP", "HKD", "INR",
    "JPY", "KSh", "MXN", "NZD", "RUB", "SEK", "SGD", "THB", "USD", "ZAR"
  ].sort();

  return (
    <StyledSelect
      value={currency}
      onChange={(e) => setCurrency(e.target.value as Currency)}
      title="Select your currency"
    >
      {currencies.map((curr) => (
        <option key={curr} value={curr}>
          {curr}
        </option>
      ))}
    </StyledSelect>
  );
}

export default CurrencySelector;

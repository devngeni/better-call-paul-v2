import React, { createContext, useContext, useEffect, useReducer } from "react";
interface ThemeProps {
  children: React.ReactNode;
}
export type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity?: number;
};

type CartState = ProductType[];

type CartAction =
  | { type: "ADD"; product: ProductType }
  | { type: "REMOVE"; id: number }
  | { type: "UPDATE"; id: number; quantity: number }
  | { type: "INITIALIZE"; items: CartState };

const CartStateContext = createContext<CartState | undefined>(undefined);
const CartDispatchContext = createContext<
  React.Dispatch<CartAction> | undefined
>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  let updatedState;
  switch (action.type) {
    case "ADD":
      const existingProduct = state.find(
        (product) => product.id === action.product.id
      );
      if (existingProduct) {
        updatedState = state.map((product) =>
          product.id === action.product.id
            ? { ...product, quantity: (product.quantity || 1) + 1 }
            : product
        );
      } else {
        updatedState = [...state, { ...action.product, quantity: 1 }];
      }
      break;
    case "REMOVE":
      updatedState = state.filter((product) => product.id !== action.id);
      break;
    case "UPDATE":
      updatedState = state.map((product) =>
        product.id === action.id
          ? { ...product, quantity: action.quantity }
          : product
      );
      break;
    case "INITIALIZE":
      return (action as { type: "INITIALIZE"; items: CartState }).items;
    default:
      throw new Error(`Unhandled action type`);
  }
  localStorage.setItem("cartItems", JSON.stringify(updatedState));
  return updatedState;
}

export const CartProvider: React.FC<ThemeProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      dispatch({ type: "INITIALIZE", items: JSON.parse(storedCartItems) });
    }
  }, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartState = () => {
  const context = useContext(CartStateContext);
  if (context === undefined) {
    throw new Error("useCartState must be used within a CartProvider");
  }
  return context;
};

export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error("useCartDispatch must be used within a CartProvider");
  }
  return context;
};

import React, { createContext, useContext, useState, useEffect } from "react";
import { LayoutProps } from "@/types";

type IServicesType = {};

const ServicesContext = createContext<IServicesType>({} as IServicesType);

export const useServicesContext = () => useContext(ServicesContext);

export const ServicesProvider: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ServicesContext.Provider value={{}}>{children}</ServicesContext.Provider>
  );
};

import React, { createContext, useContext, useEffect, useState } from "react";
import useSWR from "swr";

interface RestaurantDataContextProps {
  privateChefData: any[];
}
// Create a Restaurant Context
const RestaurantDataContext = createContext({} as RestaurantDataContextProps);

//`${process.env.NEXT_PUBLIC_BASE_URL}/api/provider`
const fetchData = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
  }
};

// Create a provider for the context
export const RestaurantDataProvider = ({ children }: any) => {
  // const [privateChefData, setPrivateChefData] = useState<any[]>([]);

  const {
    data: privateChefData,
    error,
    isLoading,
  } = useSWR("/api/provider", fetchData, {
    refreshInterval: 60000,
  });

  return (
    <RestaurantDataContext.Provider value={{ privateChefData }}>
      {children}
    </RestaurantDataContext.Provider>
  );
};

// Custom hook to consume the context
export const useRestaurantData = () => useContext(RestaurantDataContext);

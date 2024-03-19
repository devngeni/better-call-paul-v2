import React, { createContext, useContext, useEffect, useState } from "react";

interface RestaurantDataContextProps {
  privateChefData: any[];
}
// Create a Restaurant Context
const RestaurantDataContext = createContext({} as RestaurantDataContextProps);

// Create a provider for the context
export const RestaurantDataProvider = ({ children }: any) => {
  const [privateChefData, setPrivateChefData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/provider`
        );
        const data = await res.json();
        setPrivateChefData(data.data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <RestaurantDataContext.Provider value={{ privateChefData }}>
      {children}
    </RestaurantDataContext.Provider>
  );
};

// Custom hook to consume the context
export const useRestaurantData = () => useContext(RestaurantDataContext);

import { createContext, useContext } from "react";
import useSWR from "swr";

interface ServicesDataContextProps {
  getServiceDataByCategory: (category: string) => any;
  data: any;
  isLoading: boolean;
  isError: any;
}

export const ServicesDataContext = createContext(
  {} as ServicesDataContextProps
);

// Define a fetcher function
const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export function useServicesDataContext() {
  const Data = useContext(ServicesDataContext);

  if (!Data) {
    throw new Error(
      "useServicesDataContext must be used within a ServicesDataProvider"
    );
  }
  return Data;
}

export const ServicesDataProvider = ({ children }: any) => {
  const { data, error } = useSWR("api/service", fetcher);

  //filter data by category
  const getServiceDataByCategory = (category: string) => {
    if (data) {
      return data.services.filter((item: any) => item.category === category);
    }
  };

  return (
    <ServicesDataContext.Provider
      value={{
        getServiceDataByCategory,
        data,
        isLoading: !error && !data,
        isError: error,
      }}
    >
      {children}
    </ServicesDataContext.Provider>
  );
};

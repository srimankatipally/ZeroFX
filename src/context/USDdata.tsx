import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of your context data
type DataContextType = {
  exchangeRate: number;
  isLoading: boolean;
  error: string | null;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

// Create a Provider component
export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [exchangeRate, setExchangeRate] = useState<number>(82.45); // Default exchange rate
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          'https://openexchangerates.org/api/latest.json?app_id=729652f969ca4006b4e7fb288c42ecea&base=USD&symbols=INR'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch exchange rate');
        }
        const data = await response.json();
        setExchangeRate(data.rates.INR); // Access the INR exchange rate correctly
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchExchangeRate();
  }, []);

  return (
    <DataContext.Provider value={{ exchangeRate, isLoading, error }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to consume the context
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

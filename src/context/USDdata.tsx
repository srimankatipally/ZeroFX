// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// // Define the shape of your context data
// type DataContextType = {
//   exchangeRate: number;
//   isLoading: boolean;
//   error: string | null;
// };

// const DataContext = createContext<DataContextType | undefined>(undefined);

// // Create a Provider component
// export const DataProvider = ({ children }: { children: ReactNode }) => {
//   const [exchangeRate, setExchangeRate] = useState<number>(82.45); // Default exchange rate
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchExchangeRate = async () => {
//       try {
//         setIsLoading(true);
//         const response = await fetch(
//           'https://openexchangerates.org/api/latest.json?app_id=729652f969ca4006b4e7fb288c42ecea&base=USD&symbols=INR'
//         );
//         if (!response.ok) {
//           throw new Error('Failed to fetch exchange rate');
//         }
//         const data = await response.json();
//         setExchangeRate(data.rates.INR); // Access the INR exchange rate correctly
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
  
//     fetchExchangeRate();
//   }, []);

//   return (
//     <DataContext.Provider value={{ exchangeRate, isLoading, error }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// // Custom hook to consume the context
// export const useData = () => {
//   const context = useContext(DataContext);
//   if (!context) {
//     throw new Error('useData must be used within a DataProvider');
//   }
//   return context;
// };
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of your context data
type DataContextType = {
  exchangeRate: number;
  isLoading: boolean;
  error: string | null;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

// Array of API keys
const API_KEYS = [
  'c0ad5e850c8641609997fb54620c7f43',
  '60b15289351c4f4097463b56862b3f2b',
  '729652f969ca4006b4e7fb288c42ecea',
];

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [exchangeRate, setExchangeRate] = useState<number>(82.45); // Default exchange rate
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentKeyIndex, setCurrentKeyIndex] = useState<number>(0); // Track which API key to use

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        setIsLoading(true);
        const apiKey = API_KEYS[currentKeyIndex];
        const response = await fetch(
          `https://openexchangerates.org/api/latest.json?app_id=${apiKey}&base=USD&symbols=INR`
        );

        if (response.status === 429) {
          // 429 means rate limit exceeded, switch to the next API key
          const nextKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
          setCurrentKeyIndex(nextKeyIndex);
          throw new Error('Rate limit exceeded, switching API key');
        }

        if (!response.ok) {
          throw new Error('Failed to fetch exchange rate');
        }

        const data = await response.json();
        setExchangeRate(data.rates.INR); // Update exchange rate
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExchangeRate();
  }, [currentKeyIndex]); // Refetch when the API key changes

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

import { useEffect, useState, createContext, ReactNode } from "react";

interface ContextProps {
}

export const AppContext = createContext<ContextProps | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, setState] = useState<any>({});

  useEffect(() => {
    // add your useEffect code here if needed
  }, []);

  const name = "Aman"
  return (
    <AppContext.Provider value={{ name }}>
      {children}
    </AppContext.Provider>
  );
};
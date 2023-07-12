import { createContext, useContext, } from "react";

export const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {


  const value = {
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

function useGlobal() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
}

export { GlobalProvider, useGlobal };
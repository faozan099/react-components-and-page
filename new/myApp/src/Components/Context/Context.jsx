import { createContext, useContext } from "react";
import axios from "axios";
export const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  async function getData() {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
    }
  }

  getData();

  const value = {
    getData
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

// custom hooks
function useGlobal() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
}

export { GlobalProvider, useGlobal };

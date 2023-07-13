import { createContext, useContext, useReducer } from "react";
import { data } from "../backend/data";
import { reducerFunction } from "../utils/reducerFunction";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, {
    meetupAllData: data?.meetups,
    meetupData: data?.meetups,
    searchterm: "",
    selectTerm: "Both",
  });
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

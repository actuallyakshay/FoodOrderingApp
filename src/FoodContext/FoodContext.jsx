import { createContext, useReducer } from "react";

import reducer from "./reducer";

export const FoodContext = createContext();

export default function FoodContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    isLoading: false,
    isError: false,
    cartData: [],
    cartTemp: [],
    total :0,
  });

  return (
    <FoodContext.Provider value={{ state, dispatch }}>
      {children}
    </FoodContext.Provider>
  );
}

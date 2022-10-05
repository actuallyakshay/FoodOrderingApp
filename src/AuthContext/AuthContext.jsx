import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authState, authDispatch] = useReducer(reducer, {
    isAuth: true,
    token: null,
    isError: false,
    isLoading: false,
    result: {},
  });

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  console.log("From useAuthCOntext",context)
  if(!context){
    // check that context is in scope
    throw Error('use Auth context must be inside the AuthContextProvider')
  }
  return context
}
import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "../firebase/config";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    // sign the user out
    try {
      await projectAuth.signOut();

      // dispatch luout action
      dispatch({ type: "LOGOUT" });

      // update state is now checking if the component is mounted before acting
      if(!isCancelled){
        setIsPending(false);
        setError(null);
      }

    } catch (error) {
      if(!isCancelled){

        console.log(error);
        setError(error.message);
        setIsPending(false);
      }
    }
  };

  // when component unmounts, all action are cancelled
  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { logout, error, isPending };
};

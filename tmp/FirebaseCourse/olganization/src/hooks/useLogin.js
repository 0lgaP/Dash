import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { projectAuth, projectFirestore } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      
      // login
      const res = await signInWithEmailAndPassword(projectAuth, email, password);
      if (!res) {
        throw new Error("Could not complete Login");
      }

      // update online state
      await projectFirestore.collection("users").doc(res.user.uid).update({
        online: true,
      })

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      // update state is now checking if the component is mounted before acting
      if(!isCancelled){
        setIsPending(false);
        setError(null);
      } 

    } catch (error) {
      if(!isCancelled){
        setIsPending(false);
        setError(error.message);
      }
    }
  };

  // when component unmounts, all action are cancelled
  useEffect(() => {
    setIsCancelled(false)
    return () => setIsCancelled(true)
  }, [])

  return { login, error, isPending };
};

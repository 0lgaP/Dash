import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const register = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);
    try {
      // sign up user

      const res = await createUserWithEmailAndPassword(
        projectAuth,
        email,
        password
      );

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // add display name to user
      if (displayName) {
        await updateProfile(res.user, { displayName });
      }

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      // update state
      if(!isCancelled){
        setIsPending(false);
        setError(false);
      }
    } catch (error) {
      if(!isCancelled){
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }}
  };

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])
  return { error, isPending, register };
};
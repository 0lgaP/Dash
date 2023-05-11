import { useState, useEffect } from "react";
import {
  projectAuth,
  projectStorage,
  projectFirestore,
} from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const register = async (email, password, displayName, thumbnail) => {
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

      // thumbnail upload
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
      const img = await projectStorage.ref(uploadPath).put(thumbnail);
      const imgUrl = await img.ref.getDownloadURL();

      // add display name to user
      if (displayName) {
        await updateProfile(res.user, { displayName, photoURL: imgUrl });
      }

      // create user document, instead of add() that adds new id, we use doc() pass in id of doc we want to create - this case user object's uid
      // set() new document by adding the data

      // we are creating a new document for every user that signs in
      // that doc's id is the user id
      // this connects document and user, identifies the doc as user's doc
      await projectFirestore.collection("users").doc(res.user.uid).set({
        online: true,
        displayName,
        photoURL: imgUrl,
      });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });
      // strict mode is re-rendering the component twice, and not allowing the state isPending to be preserved causing a permanent "isPending" state in the form
      setIsPending(false);

      // update state
      if (!isCancelled) {
        setIsPending(false);
        setError(false);
      }
    } catch (error) {
      if (!isCancelled) {
        setIsPending(false);
        console.log(error.message);
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, [isPending]);
  return { error, isPending, register };
};

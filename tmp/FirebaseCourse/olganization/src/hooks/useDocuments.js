import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

const useDocuments = ({collection, id }) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)

  // realtime data for document

  useEffect(() => {
    const ref = projectFirestore.collection.doc(id)
    // onSnapshot returns an unsubscribe function
    const unsubscribe = ref.onSnapshot((snapshot) => {
      setDocument({...snapshot.data(), id: snapshot.id})
      setError(null)
    }, (err) => {
      console.log(err.message)
      setError("failed to get document")
    })
    // on unmount
    return () => unsubscribe()

  }, [collection, id])
  return {document, error}
}

export default useDocuments
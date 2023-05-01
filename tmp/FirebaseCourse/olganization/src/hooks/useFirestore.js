import { useReducer, useEffect, useState } from "react";
import { projectFirestore, timestamp } from "../firebase/config";

// initial state
let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null
}

const firestoreReducer = (state, action) => {
  switch(action.type){
    case 'IS_PENDING':
      //reset state explicitly
      return {isPending: true, document: null, success: false, error: null}
    case 'ADD_DOCUMENT':
      // all parts of state were updated, no need to spread it 
      return { isPending: false, document: action.payload, success: true, error: null}
    case 'ERROR' :
      return {isPending: false, document: null, success: false, error: action.payload}
    case "DELETED_DOCUMENT":
      return { isPending: false, document: null, success: true, error: null}
        default:
      return state
  }
}
export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  // collection ref
  const ref = projectFirestore.collection(collection)
console.log("what ref look like:", ref)

// only dispatch if not cancelled
const dispatchIfNotCancelled = (action) => {
  if(!isCancelled){
    dispatch(action)
  }
}
  // add document
  const addDocument = async (doc) => {
    // dispatch
    dispatch({type: "IS_PENDING"})

    // try add / catch error

    try {
      const createdAt = timestamp.fromDate(new Date())
      const addDocument = await ref.add({...doc, createdAt})
      dispatchIfNotCancelled({type: 'ADD_DOCUMENT', payload: addDocument})
    } catch (err) {
      dispatchIfNotCancelled({type: 'ERROR', payload: err.message})
    }
  }

  // delete document
  const deleteDocument = async (id) => {
    dispatch({type:"IS_PENDING"})
    try {
      await ref.doc(id).delete()
      dispatchIfNotCancelled({type: "DELETED_DOCUMENT"})
    } catch (error) {
      dispatchIfNotCancelled({type: "ERROR", payload: 'could not delete'})
    }
  }

  useEffect(() => {
    setIsCancelled(false)
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, deleteDocument, response}
}
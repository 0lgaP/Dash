import { useEffect, useState, useRef } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollection = (collection, _query, _orderBy) => {
const [doc, setDoc] = useState(null)
const [error, setError] = useState(null)

// wrap the query in a ref so it is not re-evaluated causing componet to re-render. Preventing infinite loop in useEffect
// _query is an array, because an array is a reference type it is "different" on every function call
const query = useRef(_query).current
const orderBy = useRef(_orderBy).current

useEffect(() => {
  // grab collection it right away
  let ref = projectFirestore.collection(collection)

  // check ref
  if(query) {
    ref = ref.where(...query)
  }
  // order by will require an index, this can be reached through the firebase error in the console
  if(orderBy) {
    ref = ref.orderBy(...orderBy)
  }

  // unsubscribe & update state
  const unsubscribe = ref.onSnapshot((snapshot) => {
    let results = []
    snapshot.docs.forEach(doc => {
      results.push({...doc.data(), id: doc.id})
    })

    // update State
    setDoc(results)
    setError(null)
  }, (error) => {
    console.log(error)
    setError('could not fetch data: useCollection hook')
  })

  //unsub
  return () => unsubscribe()

}, [collection, query, orderBy])

return {doc, error}
}
import { useParams } from "react-router-dom"
// hooks
import useDocuments from "../../hooks/useDocuments"
// styles
import "./Project.css"

const Project = () => {
  // id was set in our route as  ":id" so to extract the param we destructure the id from the url
const {id} = useParams()
// use documents accepts 2 arguments => collection name ('projects') and id, we grab from the perams
const {document, error} = useDocuments("projects", id)
console.log("list", document, "id", id)
// this is an alternate to {some && <div>{some}</div>}
// when we meet these if statement conditions, we return without hitting the <Project /> return
if(error) {
  return <div className="error">{error}</div>
}

if(!document){
  return <div className="loading">Loading...</div>
}

  return (
    <div className="project-details">
      <h1>{document.name}</h1>
    </div>
  )
}

export default Project
import { Link } from "react-router-dom"
import PropTypes from "prop-types";

//components
import Avatar from "../avatar/Avatar"

//styles
import "./List.css"

const List = ({projects}) => {
  return (

      <div className="project-list" >
      {projects.length === 0 && <p>No projects yet!</p>}
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <h4>{project.name}</h4>
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            <p><strong>Assigned to:</strong></p>
            <ul>
              {project.assignedUsersList.map(user => (
                <li key={user.photoUrl}>
                  <Avatar src={user.photoUrl} name={user.displayName}/>
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>

  )
}
List.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object)
  
}

export default List
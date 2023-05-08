import Avatar from "../../components/avatar/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

const ProjectSummary = ({ project }) => {
  const {deleteDocument} = useFirestore('projects')
  const {user} = useAuthContext()
  const navigate = useNavigate()
  const handleClick= e => {
    e.preventDefault()
    deleteDocument(project.id)
    navigate("/")
  }
  return (
    <>
    <div className="project-summary">
      <h2 className="page-title">{project.name}</h2>
      <p>By: {project.createdBy.displayName}</p>
      <p className="due-date">
        Project due by {project.dueDate.toDate().toDateString()}
      </p>
      <p className="details">{project.details}</p>
      <h4>Project is assigned to:</h4>
      <ul className="assigned-users">
        {project.assignedUsersList.map((user) => (
          <li key={user.id}>
            <Avatar src={user.photoUrl} name={user.displayName} />
          </li>
        ))}
      </ul>
    </div>
      {project.createdBy.id === user.uid && (<button className="btn delete" onClick={handleClick}>Delete Project</button>)}
    </>
  );
};

export default ProjectSummary;

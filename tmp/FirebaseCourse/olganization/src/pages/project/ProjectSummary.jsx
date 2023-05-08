import Avatar from "../../components/avatar/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";


const ProjectSummary = ({ project }) => {
  const {deleteDocument} = useFirestore('projects')
  const {user} = useAuthContext()
  const handleClick= e => {
    e.preventDefault()
    deleteDocument(project.id)
  }
  return (
    <div className="project-summary">
      <h2 className="page-title">{project.name}</h2>
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
      {project.createdBy.id === user.uid && (<button className="btn" onClick={handleClick}>Delete Project</button>)}
    </div>
  );
};

export default ProjectSummary;

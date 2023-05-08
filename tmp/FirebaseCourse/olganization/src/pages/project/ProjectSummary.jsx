import Avatar from "../../components/avatar/Avatar"


const ProjectSummary = ({project}) => {
  return (
    <div className="project-summary">
      <h2 className="page-title">{project.name}</h2>
      <p className="due-date">
        Project due by {project.dueDate.toDate().toDateString()}
      </p>
      <p className="details">{project.details}</p>
      <h4>Project is assigned to:</h4>
<ul className="assigned-users">
      {project.assignedUsersList.map(user => (
        <li key={user.id}>
<Avatar src={user.photoUrl} name={user.displayName}/>
        </li>
      ))}
</ul>

    </div>
  )
}

export default ProjectSummary
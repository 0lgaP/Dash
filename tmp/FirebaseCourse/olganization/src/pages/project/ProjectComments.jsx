import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import Avatar from "../../components/avatar/Avatar";


const ProjectComments = ({project}) => {
  const {updateDocument, response} = useFirestore('projects')
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };
    console.log(commentToAdd);
    await updateDocument(project.id, {comments: [...project.comments, commentToAdd]})
    if(!response.error) {
      setNewComment("")
    }
  };
  return (
    <div className="project-comments">
      <h4>Project Comments</h4>
      <ul>
        {project.comments.length > 0 && project.comments.map(comment => (
          <li key={comment.id}>
<div className="comment-author">
  <Avatar src={comment.photoURL} name={comment.displayName} />
  <p>{comment.displayName}</p>
</div>
<div className="comment-date">date me</div>
<div className="comment-content">{comment.content}</div>
          </li>
        ))}
      </ul>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <p>Add new comment</p>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="btn" type="submit">
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default ProjectComments;
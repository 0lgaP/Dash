import {useCollection} from "../../hooks/useCollection"
import Avatar from "../avatar/Avatar"
import "./OnlineUsers.css"

const OnlineUsers = () => {
  const {doc, error} = useCollection('users')
  return (
    <div className="user-list">
      <h2>All Users</h2>
      {error && <div className="error">{error}</div>}
      {doc && doc.map((user) => (
        <div key={user.id} className="user-list-item">
          <div>
          {user.online && <span className="online-user"></span>}
          </div>
          <span>{user.displayName}</span>
          <Avatar src={user.photoURL} />
        </div>
      ))}
    </div>
  )
}

export default OnlineUsers
import {useState} from 'react'
import {useCollection} from "../../hooks/useCollection"
import Avatar from "../avatar/Avatar"
import "./OnlineUsers.css"

const OnlineUsers = () => {
  const [open, setOpen] = useState(true)
  const {doc, error} = useCollection('users')

  const toggleOpen = () => setOpen(prev => !prev)
  if(!open) {
    return (
      <div className="user-list collapsed">
        <div className="toggle-container">
      <button className='btn-toggle' aria-label="hide names of team members" aria-pressed={!open} onClick={toggleOpen}> {"+"} </button>

      </div>
      {doc && doc.map((user) => (
        <div key={user.id} className="user-list-item">
          <div>
          {user.online && <span className="online-user"></span>}
          </div>
          <Avatar src={user.photoURL} name={user.displayName}/>
        </div>
      ))}
   
    </div>
    )
  }
  return (
    <div className="user-list">
      <div className="toggle-container">
      <button className='btn-toggle' onClick={toggleOpen} aria-label="hide names of team members" aria-pressed={!open}> {"-"} </button><h2>Online</h2></div>
      {error && <div className="error">{error}</div>}
      {doc && doc.map((user) => (
        <div key={user.id} className="user-list-item">
          <div>
          {user.online && <span className="online-user"></span>}
          </div>
          <span>{user.displayName}</span>
          <Avatar src={user.photoURL} name={user.displayName}/>
        </div>
      ))}
    </div>
  )
}

export default OnlineUsers
import { useState, useEffect } from "react";
import { useCollection } from "../../hooks/useCollection";
import Avatar from "../avatar/Avatar";
import "./OnlineUsers.css";

const OnlineUsers = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);
  const [isSmall, setSmall] = useState(window.innerWidth > 825 && window.innerWidth < 1023.9);

  const { doc, error } = useCollection("users");

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
    setSmall(window.innerWidth > 825);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  });

  return (
    <div className="user-list">
      <div className="fixed-content">
        <div className="online-title">
          {isDesktop && <h2>Online</h2>}
          </div>
        {error && <div className="error">{error}</div>}
        {doc &&
          doc.map((user) => (
            <div key={user.id} className="user-list-item">
              <div>
                {user.online ? (
                  <span className="online-user"></span>
                ) : (
                  <span className="offline-user"></span>
                )}
              </div>
              {isDesktop && (<span>{user.displayName}</span>)}
              {isSmall && null}
              <Avatar src={user.photoURL} name={user.displayName} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default OnlineUsers;

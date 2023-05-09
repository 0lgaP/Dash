import { useState, useEffect } from "react";
import { useCollection } from "../../hooks/useCollection";
import Avatar from "../avatar/Avatar";
import "./OnlineUsers.css";

const OnlineUsers = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);
  const [isSmall, setSmall] = useState(window.innerWidth > 640 && window.innerWidth < 1023.9);
  const [ishidden, setIsHidden] = useState(window.innerWidth > 640 && window.innerWidth < 1023.9);

  const { doc, error } = useCollection("users");

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
    setSmall(window.innerWidth > 640);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  });


  const smallView = (
    <div className="user-list collapsed">
      <div className="title-container">
      <h2>Online</h2>
      </div>
      {doc &&
        doc.map((user) => (
          <div key={user.id} className="user-list-item">
            <div>{user.online ? <span className="online-user"></span> : <span className="offline-user"></span>}</div>
            <Avatar src={user.photoURL} name={user.displayName} />
          </div>
        ))}
    </div>
  );

  const desktopView = (
    <div className="user-list">
      <div className="title-container">
        <h2>Online</h2>
      </div>
      {error && <div className="error">{error}</div>}
      {doc &&
        doc.map((user) => (
          <div key={user.id} className="user-list-item">
            <div>{user.online ? <span className="online-user"></span> : <span className="offline-user"></span>}</div>
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} name={user.displayName} />
          </div>
        ))}
    </div>
  );

  return (
    <>
    {isDesktop ? desktopView : smallView}
    </>
    );
};

export default OnlineUsers;

import "./Avatar.css";

// eslint-disable-next-line react/prop-types
const Avatar = ({ src }) => {
  return (
    <div className="avatar">
      <img src={src} alt="user avatar" />
    </div>
  );
};

export default Avatar;

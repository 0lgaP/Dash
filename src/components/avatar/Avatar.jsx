import "./Avatar.css";

// eslint-disable-next-line react/prop-types
const Avatar = ({ src, name }) => {
  return (
    <div className="avatar">
      <img src={src} alt={`${name} avatar`} />
    </div>
  );
};

export default Avatar;

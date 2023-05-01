import { useState, useRef } from "react";
// styles
import "./Register.css";
// components
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";
import FileSelector from "../../components/input/FileSelector";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, displayName, thumbnail)
  }

  // images
  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError("Please select a file");
      return
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return
    }
    if(!selected.size > 100000){
      setThumbnailError("Image file size must be less than 100kb")
      return
    }

    setThumbnailError(null)
    setThumbnail(selected)
    console.log("Thumbnail upadated")
  };

  // input: onChange, value, type, inputLabel
  const passRef = useRef(null);
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        inputLabel="Email"
      />
      <PasswordInput
        onChange={(e) => setPassword(e.target.value)}
        password={password}
        ref={passRef}
      />
      <Input
        onChange={(e) => setDisplayName(e.target.value)}
        value={displayName}
        type="text"
        inputLabel="Display Name"
      />
      <FileSelector onChange={handleFileChange} error={thumbnailError}/> 

      <button type="submit" className="btn">
        Register
      </button>
    </form>
  );
};

export default Register;

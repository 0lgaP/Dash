import "./Input.css"

// eslint-disable-next-line react/prop-types
const FileSelector = ({onChange, error}) => {
  return (
    <label>
    <p>Profile Image</p>    
    <input
      className="input-container"
      type="file"
      onChange={onChange}
      required
    />
    {error && <div>{error}</div>}
  </label>
  )
}

export default FileSelector
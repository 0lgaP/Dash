import PropTypes from "prop-types";
//styles
import "./Input.css"
const Input = ({ onChange, value, type, inputLabel, required }) => {

  return (
    <label>
      <p>{inputLabel}</p>     
      <input
        className="input-container"
        type={type}
        onChange={onChange}
        value={value}
        required={required}
      />
    </label>
  );
};
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  type: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool
};
Input.displayName = `"Input"`;
Input.defaultProps = {
  required: true,
}
export default Input;
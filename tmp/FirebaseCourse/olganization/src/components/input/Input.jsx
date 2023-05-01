import PropTypes from "prop-types";
//styles
import "./Input.css"
const Input = ({ onChange, value, type, inputLabel }) => {

  return (
    <label>
      <p>{inputLabel}</p>     
      <input
        className="input-container"
        type={type}
        onChange={onChange}
        value={value}
      />
    </label>
  );
};
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  type: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  error: PropTypes.string
};
Input.displayName = `"Input"`;

export default Input;
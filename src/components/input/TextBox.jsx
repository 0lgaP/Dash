import PropTypes from "prop-types";
// styles
import "./TextBox.css";

const TextBox = ({ inputLabel, onChange, value, required}) => {
  return (
    <label className="input-label">
      <p>{inputLabel}</p>
      <textarea
        className="input-container"
        onChange={onChange}
        value={value}
        required={required}
        spellCheck="true"
      />
    </label>
  );
};
TextBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  type: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
};
TextBox.displayName = "TextBox";
TextBox.defaultProps = {
  required: true,
  spellCheck: true,
};

export default TextBox;

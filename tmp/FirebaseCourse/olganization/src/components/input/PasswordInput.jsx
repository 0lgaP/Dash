import { useState, useEffect, forwardRef } from "react";
import PropTypes from "prop-types";

// styles
import "./PasswordInput.css";

// icons
import Visible from "../../assets/visibility_on.svg";
import InVisible from "../../assets/visibility_off.svg"

// this component is meant to be completely accessible I will keep improving it

const PasswordInput = forwardRef((props, ref) => {
  const [showPassword, setShowPassword] = useState(true);

  const { password, onChange } = props;

  const onToggle = async () => {
    setShowPassword((prev) => !prev);
    console.log({showPassword, password})
  };

  useEffect(() => {
    if (password) {
      ref.current.focus();
      ref.current.setSelectionRange(
        ref.current.value.length,
        ref.current.value.length
      );
    }
  }, [showPassword, password, ref]);

  return (
    <div className="input-with-button">
      <button
        className="password-visible"
        id="show-password"
        type="button"
        role="switch"
        aria-pressed={showPassword}
        onClick={onToggle}
      >
        <img
          src={showPassword ? Visible : InVisible}
          alt="show password"
          className={showPassword ? "show-icon" : "hide-icon"}
        />
      </button>
      <label>
        <p>Password</p>
        <input
        className="pass-input"
          type={showPassword ? "text" : "password"}
          aria-required="true"
          autoComplete="new-password"
          ref={ref}
          value={password}
          onChange={onChange}
          className="pass"
        />
      </label>
    </div>
  );
});

PasswordInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  password: PropTypes.string,
};
PasswordInput.displayName = "PasswordInput";
export default PasswordInput;



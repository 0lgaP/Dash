import PropTypes from "prop-types";
// styles
import "./FormCard.css"

// components
import Button from "../input/Button";

const FormCard = ({ children, onSubmit, title, buttonLabel, isPending , addClass}) => {
  return (
    <>
    <form className={`auth-form ${addClass}`} onSubmit={onSubmit}>
      <h2>{title}</h2>
      {children}
      <Button label={buttonLabel} type="submit" disabled={isPending}/>
    </form>
      </>
  );
};


FormCard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  error: PropTypes.any,
  isPending: PropTypes.bool,
  addClass: PropTypes.string
};

FormCard.defaultProps = {
  buttonLabel: "Submit",
  addClass: ""
};
FormCard.displayName = "Input";

export default FormCard;

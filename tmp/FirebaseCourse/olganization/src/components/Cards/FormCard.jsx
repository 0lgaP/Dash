import PropTypes from "prop-types";

// components
import Button from "../input/Button";

const FormCard = ({ children, onSubmit, title, buttonLabel, isPending }) => {
  return (
    <>
    <form className="auth-form" onSubmit={onSubmit}>
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
  isPending: PropTypes.bool
};

FormCard.defaultProps = {
  buttonLabel: "Submit",
};
FormCard.displayName = "Input";

export default FormCard;

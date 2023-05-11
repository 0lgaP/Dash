
// eslint-disable-next-line react/prop-types
const Button = ({ label, type, disabled}) => {

  let labelText = disabled? "Loading" : label 
  return (
    <button className="btn" type={type} disabled={disabled} >
      {labelText}
    </button>
  )
}

export default Button
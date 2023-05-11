import Select from 'react-select'
import PropTypes from "prop-types";

const categories = [
  {value: 'development', label: 'Development'},
  {value: 'sales', label: 'Sales'},
  {value: 'design', label: 'Design'},
  {value: 'marketing', label: 'Marketing'},

]

const SelectInput = ({onChange, label, options, isMulti}) => {
  return (
    <label className="input-label">
      <p>{label}</p>
      <Select isMulti={isMulti} className="input-container" onChange={onChange} options={options}/>
    </label>
  )
}
SelectInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  options: PropTypes.array,
  isMulti: PropTypes.bool
};
SelectInput.displayName = `"Input"`;
SelectInput.defaultProps = {
  required: true,
  label: "Project Category",
options: categories,
isMulti: false
}
export default SelectInput
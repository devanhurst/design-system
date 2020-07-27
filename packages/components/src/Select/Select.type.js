import PropTypes from "prop-types";

const valueType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.arrayOf(PropTypes.number)
]);

export const SelectPropTypes = {
  autocomplete: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  errorList: PropTypes.arrayOf(PropTypes.string),
  labelText: PropTypes.string,
  helpText: PropTypes.node,
  noOptionsMessage: PropTypes.func,
  requirementText: PropTypes.string,
  id: PropTypes.string,
  initialIsOpen: PropTypes.bool,
  menuPosition: PropTypes.string,
  maxHeight: PropTypes.string,
  multiselect: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: valueType,
  defaultValue: valueType,
  className: PropTypes.string,
  classNamePrefix: PropTypes.string,
  menuIsOpen: PropTypes.bool,
  onMenuOpen: PropTypes.func,
  onMenuClose: PropTypes.func,
  onInputChange: PropTypes.func,
  components: PropTypes.object
};

export const SelectDefaultProps = {
  autocomplete: true,
  disabled: null,
  defaultValue: undefined,
  error: undefined,
  errorMessage: null,
  errorList: null,
  labelText: null,
  helpText: null,
  noOptionsMessage: () => null,
  requirementText: null,
  id: null,
  initialIsOpen: undefined,
  maxHeight: "248px",
  menuPosition: "absolute",
  multiselect: false,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  placeholder: undefined,
  required: false,
  value: undefined,
  className: null,
  classNamePrefix: undefined,
  menuIsOpen: undefined,
  onMenuOpen: undefined,
  onMenuClose: undefined,
  onInputChange: undefined,
  components: undefined
};
import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material'
import PropTypes from 'prop-types'

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const IconComponent = () => <ExpandMoreIcon color="primary" />

const Select = ({ name, label, value, options = [], classes, error, onChange, ...rest }) => (
  <FormControl variant="standard" classes={{ root: classes }} {...(error && { error: true })} {...rest}>
    <InputLabel shrink>
      {label} <span className="optional">(Optional)</span>
    </InputLabel>
    <MuiSelect
      IconComponent={IconComponent}
      disableUnderline
      label={label}
      name={name}
      value={value}
      onChange={onChange}
    >
      <MenuItem value="0">-- Select market --</MenuItem>

      {options.map((item) => (
        <MenuItem key={item.id} value={item.id}>
          {item.title}
        </MenuItem>
      ))}
    </MuiSelect>
    {error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
)

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  classes: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string
    })
  ),
  error: PropTypes.string,
  onChange: PropTypes.func
}

export default Select

import { FormControl, Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material'
import PropTypes from 'prop-types'

const Checkbox = ({ name, label, value, classes, onChange }) => {
  const convertToDefaultEventPara = (name, value) => ({
    target: { name, value }
  })

  return (
    <FormControl classes={{ root: classes }}>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) => onChange(convertToDefaultEventPara(name, e.target.checked))}
          />
        }
        label={label}
      />
    </FormControl>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  classes: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func
}

export default Checkbox

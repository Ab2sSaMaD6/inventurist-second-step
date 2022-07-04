import { FormControlLabel, FormGroup, Checkbox as MuiCheckbox } from '@mui/material'

const Checkbox = ({ name, label, variant, value, classes, error = null, onChange, ...rest }) => {
    return (
        <FormGroup classes={{root: classes}} {...rest}>
            <FormControlLabel control={<MuiCheckbox value={value} onChange={onChange} />} label={label} />
        </FormGroup>
    )
}

export default Checkbox
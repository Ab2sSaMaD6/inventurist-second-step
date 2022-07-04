import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material'

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const IconComponent = (props) => {
    return <ExpandMoreIcon color='primary' />
}

const Select = ({ name, label, value, classes, error = null, onChange, options = [], ...rest }) => {
    return (
        <FormControl variant='standard' classes={{root: classes}} {...(error && { error: true })} {...rest}>
            <InputLabel shrink>{label} <span className='optional'>(Optional)</span></InputLabel>
            <MuiSelect IconComponent={IconComponent} disableUnderline label={label} name={name} value={value} onChange={onChange}>
                <MenuItem value='0'>-- Select market --</MenuItem>

                {options.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                        {item.title}
                    </MenuItem>
                ))}
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}

export default Select

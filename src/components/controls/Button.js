import { Button as MuiButton } from '@mui/material'

const Button = ({ text, variant, color, size, onClick, ...rest }) => {
    return (
        <MuiButton variant={variant} color={color} size={size} onClick={onClick} {...rest}>
            {text}
        </MuiButton>
    )
}

Button.defaultProps = {
    variant: 'contained',
    color: 'primary',
    size: 'large',
}

export default Button

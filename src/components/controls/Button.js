import { Button as MuiButton } from '@mui/material'
import PropTypes from 'prop-types'

const Button = ({ children, variant, color, size, onClick, ...rest }) => (
  <MuiButton variant={variant} color={color} size={size} onClick={onClick} {...rest}>
    {children}
  </MuiButton>
)

Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
  size: 'large'
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default Button

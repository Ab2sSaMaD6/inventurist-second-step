// MUI
import { styled } from '@mui/material/styles'
//
import PropTypes from 'prop-types'
// Components
import TagsInput from './controls/TagsInput'
import Checkbox from './controls/Checkbox'
import Select from './controls/Select'
import Button from './controls/Button'

const renderFields = ({ fields, values, errors, handleInputChange }) =>
  fields.map((field) => {
    const { type, name, label, classes, options, ...rest } = field

    if (type === 'tags')
      return (
        <TagsInput
          id={name}
          key={name}
          label={label}
          value={values[name]}
          options={options}
          classes={classes}
          onChange={handleInputChange}
          error={errors[name]}
          {...rest}
        />
      )

    if (type === 'checkbox')
      return (
        <Checkbox
          key={name}
          name={name}
          value={values[name]}
          label={label}
          classes={field.classes}
          onChange={handleInputChange}
        />
      )
    if (type === 'select')
      return (
        <Select
          key={name}
          value={values[name]}
          name={name}
          onChange={handleInputChange}
          label={label}
          classes={classes}
          options={options}
          error={errors[name]}
          {...rest}
        />
      )

    return <>invalid filed type</>
  })

function Form({ config, values, errors, handleInputChange, onSubmit, onReset, status }) {
  return (
    <RootStyle>
      <form onSubmit={onSubmit} onReset={onReset} className="grid">
        {renderFields({ fields: config.fields, values, errors, handleInputChange })}

        <Button type="reset" className="resetButton" variant="text" disabled={status === 'pending'}>
          Reset
        </Button>
        <Button type="submit" className="submitButton" disabled={status === 'pending'}>
          Submit
        </Button>
      </form>
    </RootStyle>
  )
}

// Styles
const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'auto',

  '.grid ': {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit, 25%)'
  },

  '.submitButton ': {
    width: '100%'
  },

  '.submitButton, .resetButton ': {
    alignSelf: 'end',
    justifySelf: 'end'
  },

  // media query
  [theme.breakpoints.up('sm')]: {
    '.halfWidth': {
      gridColumn: 'span 2 / auto'
    },
    '.fullWidth': {
      gridColumn: 'span 4 / auto'
    }
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    '.fullWidth, .halfWidth': {
      gridColumn: 'span 4 / auto'
    },
    '.submitButton, .resetButton ': {
      gridColumn: 'span 2 / auto'
    }
  },
  [theme.breakpoints.down(300)]: {
    '.submitButton, .resetButton ': {
      gridColumn: 'span 4 / auto',
      width: '100%'
    }
  }
}))

Form.propTypes = {
  config: PropTypes.exact({
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.oneOf(['tags', 'checkbox', 'select']),
        label: PropTypes.string,
        classes: PropTypes.string,
        options: PropTypes.array,
        placeholder: PropTypes.string,
        required: PropTypes.bool
      })
    )
  }),
  values: PropTypes.object,
  status: PropTypes.string,
  errors: PropTypes.object,
  handleInputChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func
}

export default Form

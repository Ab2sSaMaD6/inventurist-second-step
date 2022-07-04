// MUI
import { styled } from '@mui/material/styles'

// Components
import TagsInput from './controls/TagsInput'
import Checkbox from './controls/Checkbox'
import Select from './controls/Select'
import Button from './controls/Button'

const renderFields = ({ fields, values, handleInputChange }) => {
  return fields.map((field) => {
    const { type, name, label, classes, options, ...rest } = field

    if (type === 'tags')
      return (
        <TagsInput
          id={name}
          key={name}
          value={values[name]}
          changeHandler={handleInputChange}
          label={label}
          classes={classes}
          {...rest}
        />
      )

    if (type === 'checkbox')
      return <Checkbox key={name} value={values[name]} label={label} classes={field.classes} {...rest} />
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
          {...rest}
        />
      )

    return <div>invalid filed type</div>
  })
}

function Form({ config, initialValues, values, handleInputChange, validate, onChange, onSubmit }) {
  const { fields } = config

  return (
    <RootStyle>
      <form onSubmit={onSubmit} className="grid">
        {renderFields({ fields, values, handleInputChange })}

        <Button key="reset" className="resetButton" text="Reset" variant="text" />
        <Button key="submit" className="submitButton" type="submit" text="Submit" />
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
    width: '100%',
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
      gridColumn: 'span 2 / auto',
      
    },
  },
  [theme.breakpoints.down(300)]: {
    '.submitButton, .resetButton ': {
      gridColumn: 'span 4 / auto',
      width: '100%'
    },
  }
}))

Form.defaultProps = {
  onChange: ({ key, value }) => value
}

export default Form

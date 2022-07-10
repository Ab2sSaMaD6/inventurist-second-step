import { useMemo } from 'react'
import PropTypes from 'prop-types'
// MUI
import { Paper } from '@mui/material'
// Components
import Form from '../../components/Form'
//
import useForm from '../../hooks/useForm'
import { configurer } from './config'
import * as actions from '../../store/actions'

const initialValues = {
  context: [],
  questions: [],
  companies: [],
  is_only: false,
  market: 0
}

const SearchForm = ({ options, dispatch, status }) => {
  const config = useMemo(() => configurer({ contextOptions: options.contextOptions }), [options])

  const validate = (fieldValues = values) => {
    const temp = { ...errors }
    if ('questions' in fieldValues) temp.questions = fieldValues.questions.length !== 0 ? '' : 'This field is required.'

    setErrors({ ...temp })

    if (fieldValues === values) return Object.values(temp).every((item) => item === '')
  }

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(initialValues, validate, true)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (validate()) dispatch(actions.fetchSignals())
  }

  const handleReset = () => {
    console.log('reset')
    resetForm()
  }

  return (
    <Paper variant="outlined" square sx={{ py: 5, px: { xs: 1, md: 2, lg: 5 } }}>
      <Form
        config={config}
        onSubmit={handleSubmit}
        onReset={handleReset}
        initialValues={initialValues}
        values={values}
        errors={errors}
        handleInputChange={handleInputChange}
        status={status}
      />
    </Paper>
  )
}

SearchForm.propTypes = {
  options: PropTypes.array,
  dispatch: PropTypes.func,
  status: PropTypes.string
}

export default SearchForm

import { useMemo } from 'react'
// MUI
import { Paper } from '@mui/material'
// Components
import Form from '../../components/Form'
//
import useForm from '../../hooks/useForm'
import { configurer } from './config'

const initialValues = {
  context: [],
  questions: [],
  companies: [],
  is_only: false,
  market: 'market1'
}

const SearchForm = ({ data }) => {
  const config = useMemo(() => configurer({ contextOptions: data.contextOptions }), [data])

  const validate = (fieldValues = values) => {
    const temp = { ...errors }
    if ('context' in fieldValues) temp.context = fieldValues.context.length !== 0 ? '' : 'This field is required.'

    setErrors({ ...temp })

    if (fieldValues === values) return Object.values(temp).every((item) => item === '')
  }

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(initialValues, validate)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit')
    console.log(values);
    // if (validate()) submit
    // resetForm()
  }

  const handleChange = (event) => {}

  return (
    <Paper variant="outlined" square sx={{ py: 5, px: { xs: 1, md: 2, lg: 5 } }}>
      <Form
        config={config}
        onChange={handleChange}
        onSubmit={handleSubmit}
        initialValues={initialValues}
        values={values}
        handleInputChange={handleInputChange}
      />
    </Paper>
  )
}

export default SearchForm

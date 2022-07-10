import { useState } from 'react'

export default function useForm(initialValues, validate, validateOnChange = false) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setValues({
      ...values,
      [name]: value
    })

    if (validateOnChange) validate({ [name]: value })
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
  }

  return { values, setValues, errors, setErrors, handleInputChange, resetForm }
}

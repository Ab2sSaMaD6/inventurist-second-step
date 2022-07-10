import { useCallback, useReducer } from 'react'

const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const enhancedDispatch = useCallback(
    (action) => {
      if (typeof action === 'function') {
        console.log('It is a thunk')
        action(dispatch)
      } else {
        dispatch(action)
      }
    },
    [dispatch]
  )

  return [state, enhancedDispatch]
}

export default useThunkReducer

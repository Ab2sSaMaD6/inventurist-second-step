import * as actionTypes from '../actions/actionTypes'

const initialState = {
  data: [],
  status: false
}

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch signals
    case actionTypes.FETCH_SIGNALS_START:
      console.log('[reducer]: FETCH_SIGNALS_START')
      return {
        ...state,
        status: 'pending'
      }
    case actionTypes.FETCH_SIGNALS_SUCCESS:
      console.log('[reducer]: FETCH_SIGNALS_SUCCESS')
      return {
        ...state,
        data: action.payload,
        status: 'success'
      }
    case actionTypes.FETCH_SIGNALS_FAIL:
      console.log('[reducer]: FETCH_SIGNALS_FAIL')
      return {
        ...state,
        error: action.error,
        status: 'error'
      }
    default:
      console.log('[reducer]: default')
      return state
  }
}

export default reducer

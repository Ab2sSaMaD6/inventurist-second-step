import axios from '../../api/signals'
import * as actionTypes from './actionTypes'

// fetch signals

export const fetchSignalsSuccess = (data) => ({
  type: actionTypes.FETCH_SIGNALS_SUCCESS,
  payload: data
})

export const fetchSignalsFail = (err) => ({
  type: actionTypes.FETCH_SIGNALS_FAIL,
  error: err
})

export const fetchSignalsStart = () => ({
  type: actionTypes.FETCH_SIGNALS_START
})

export const fetchSignals = () => (dispatch) => {
  dispatch(fetchSignalsStart())

  axios
    .get('/signals')
    .then((res) => {
      dispatch(fetchSignalsSuccess(res.data))
    })
    .catch((err) => {
      dispatch(fetchSignalsFail(err.message))
    })
}

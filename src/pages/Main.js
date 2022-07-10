import React, { Suspense, useRef, useState } from 'react'
// mui
import { Box, CircularProgress } from '@mui/material'
// hooks
import useThunkReducer from '../hooks/useThunkReducer'
// reducer and actions
import signalReducer from '../store/reducers/signals'
import { scrollTo } from '../utils/scrollTo'
// sections
const SearchForm = React.lazy(() => import('../sections/SearchForm/SearchForm'))
const Result = React.lazy(() => import('../sections/Result'))

const initialState = {
  data: [],
  status: 'idle', // pending || success || error
  error: ''
}

const Main = () => {
  const [options] = useState([{ contextOptions: [] }])
  const resultSectionRef = useRef(null)

  const [{ status, data, error }, dispatch] = useThunkReducer(signalReducer, initialState)

  // scroll to result section after loading
  if (resultSectionRef.current) {
    scrollTo({ ref: resultSectionRef, duration: 1500 })
  }

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <SearchForm options={options} dispatch={dispatch} status={status} />

      {status === 'pending' && (
        <Box sx={{ display: 'flex', justifyContent: 'center', m: 10 }}>
          <CircularProgress />
        </Box>
      )}

      <div id="result_section" ref={resultSectionRef}>
        {status === 'success' && <Result result={data} />}

        {status === 'error' && <div>{error}</div>}
      </div>
    </Suspense>
  )
}

export default Main

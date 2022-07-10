// MUI
import { Paper, Typography } from '@mui/material'
//
import PropTypes from 'prop-types'
//
import { Heatmap } from '../components/heatmap'
import Table from '../components/Table'

const Result = ({ result }) => {
  const [{ series }, { signals }] = result

  return (
    <>
      <Paper variant="outlined" square sx={{ p: 5, my: 8, overflow: 'auto' }}>
        <Heatmap data={series} />
      </Paper>

      <Typography variant="h3" gutterBottom>
        Signals
      </Typography>

      <Paper variant="outlined" square sx={{ mb: 12, px: 1 }}>
        <Table data={signals} />
      </Paper>
    </>
  )
}

Result.propTypes = {
  result: PropTypes.arrayOf(
    PropTypes.exact({
      series: PropTypes.array,
      signals: PropTypes.array
    })
  )
}

export default Result

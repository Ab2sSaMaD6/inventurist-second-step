import PropTypes from 'prop-types'
import Chart from 'react-apexcharts'
// MUI
import { useTheme } from '@mui/material/styles'
import config from './config'

const Heatmap = ({ data }) => {
  const theme = useTheme()

  const options = config(theme)

  return (
    <div style={{ minWidth: 500 }}>
      <Chart options={options} series={data} type="heatmap" height={230} />
    </div>
  )
}

Heatmap.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.exact({
          x: PropTypes.string,
          y: PropTypes.number
        })
      )
    })
  )
}

export default Heatmap

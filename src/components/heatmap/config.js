const config = (theme) => ({
  chart: {
    id: 'apexchart-example',
    fontFamily: 'Helvetica, Arial, sans-serif'
  },
  grid: {
    show: false,
    padding: {
      left: 20
    }
  },
  xaxis: {
    tickAmount: 2,
    tickPlacement: 'on',
    position: 'top',
    labels: {
      trim: true,
      style: {
        fontSize: 15,
        fontWeight: 500
      },
      offsetY: 12
    },
    axisTicks: {
      color: '#78909C',
      height: 6,
      offsetY: -8
    },
    title: {
      text: 'Companies / Websites',
      offsetY: -130,
      style: {
        fontSize: 16
      }
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    title: {
      text: 'Context & Questions',
      offsetY: -5,
      style: {
        fontSize: '14px'
      }
    },
    labels: {
      align: 'left',
      trim: true,
      minWidth: 220,
      maxWidth: 220,
      style: {
        colors: [theme.palette.primary.main],
        fontSize: 15,
        fontWeight: 500
      }
    }
  },
  legend: {
    show: false
  },
  plotOptions: {
    heatmap: {
      radius: 8,
      dataLabels: {
        position: 'top'
      },
      colorScale: {
        ranges: [
          {
            from: 0,
            to: 5,
            color: theme.palette.background.neutral,
            foreColor: theme.palette.primary.main
          },
          {
            from: 5,
            to: 10,
            color: theme.palette.background.blue
          }
        ]
      }
    }
  },
  tooltip: {
    enabled: true,
    enabledOnSeries: undefined
  },
  responsive: [
    {
      breakpoint: 720,
      options: {
        xaxis: {
          labels: {
            offsetY: 40
          },
          title: {
            offsetY: -240
          }
        }
      }
    }
  ],
  stroke: {
    width: 8
  },
  dataLabels: {
    style: {
      fontSize: '14px',
      fontWeight: 'bold'
    }
  }
})

export default config

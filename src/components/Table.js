import { useState } from 'react'
import PropTypes from 'prop-types'
// MUI
import { Checkbox, TableBody, TableCell, TableRow } from '@mui/material'
//
import useTable from '../hooks/useTable'

const headCells = [
  { id: 'companies', label: 'companies' },
  { id: 'context', label: 'context' },
  { id: 'question', label: 'question' },
  { id: 'url', label: 'result url' },
  { id: 'title', label: 'title' }
]

function Table({ data }) {
  const [selected, setSelected] = useState([])

  const [filterFunction] = useState({
    fn: (items) => {
      return items
    }
  })

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((item) => item.id)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }
    setSelected(newSelected)
  }

  const { TableContainer, TableHead, TablePagination, recordsAfterPagingAndSorting } = useTable(
    data,
    headCells,
    filterFunction,
    handleSelectAllClick,
    selected.length
  )

  return (
    <>
      <TableContainer>
        <TableHead />

        <TableBody>
          {recordsAfterPagingAndSorting().map((row) => {
            const { id, companies, context, question, resultUrl, title } = row
            const isItemSelected = selected.indexOf(id) !== -1

            return (
              <TableRow
                hover
                key={id}
                tabIndex={-1}
                role="checkbox"
                selected={isItemSelected}
                aria-checked={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, id)} />
                </TableCell>
                <TableCell sx={{ borderRight: '8px solid #fff' }}>{companies}</TableCell>
                <TableCell>{context}</TableCell>
                <TableCell>{question}</TableCell>
                <TableCell
                  sx={{
                    textDecoration: 'underline',
                    '::first-letter': { textTransform: 'lowercase' }
                  }}
                >
                  {resultUrl}
                </TableCell>
                <TableCell>{title}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </TableContainer>
      <TablePagination />
    </>
  )
}

Table.propTypes = {
  data: PropTypes.array
}

export default Table

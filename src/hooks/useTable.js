import { useState } from 'react'
// MUI
import {
  Checkbox,
  Table,
  TableCell,
  TableHead as MuiTableHead,
  TablePagination as MuiTablePagination,
  TableContainer as MuiTableContainer,
  TableRow,
  TableSortLabel,
  Stack
} from '@mui/material'
// Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const IconComponent = () => (
  <Stack direction="column" ml={1}>
    <KeyboardArrowUpIcon color="primary" sx={{ fontSize: '1rem', marginBottom: '-4px' }} />
    <KeyboardArrowDownIcon color="primary" sx={{ fontSize: '1rem', marginTop: '-4px' }} />
  </Stack>
)

export default function useTable(records, headCells, filterFunction, onSelectAllClick, numSelected) {
  const rowsPerPageOptions = [5, 10, 25]
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0])
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('title')
  const rowCount = records.length

  const TableContainer = ({ children }) => (
    <MuiTableContainer>
      <Table>{children}</Table>
    </MuiTableContainer>
  )

  const TableHead = () => {
    const handleRequestSort = (property) => {
      const isAsc = orderBy === property && order === 'asc'
      setOrder(isAsc ? 'desc' : 'asc')
      setOrderBy(property)
    }

    return (
      <MuiTableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
              {headCell.disableSorting ? (
                headCell.label
              ) : (
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={() => handleRequestSort(headCell.id)}
                  IconComponent={IconComponent}
                >
                  {headCell.label}
                </TableSortLabel>
              )}
            </TableCell>
          ))}
        </TableRow>
      </MuiTableHead>
    )
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1
    }
    if (b[orderBy] > a[orderBy]) {
      return 1
    }
    return 0
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy)
  }

  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) {
        return order
      }
      return a[1] - b[1]
    })
    return stabilizedThis.map((el) => el[0])
  }

  const recordsAfterPagingAndSorting = () =>
    stableSort(filterFunction.fn(records), getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      (page + 1) * rowsPerPage
    )

  const TablePagination = () => (
    <MuiTablePagination
      component="div"
      page={page}
      rowsPerPageOptions={rowsPerPageOptions}
      rowsPerPage={rowsPerPage}
      count={rowCount}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      SelectProps={{ variant: 'outlined' }}
      labelDisplayedRows={() => (
        <>
          <span className="pageNumber">{page + 1}</span> of {Math.floor(rowCount / rowsPerPage) + 1} page{' '}
        </>
      )}
    />
  )

  return {
    TableContainer,
    TableHead,
    TablePagination,
    recordsAfterPagingAndSorting
  }
}

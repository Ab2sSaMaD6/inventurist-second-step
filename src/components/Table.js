import { useState } from 'react'

// MUI
import { Checkbox, Paper, TableBody, TableCell, TableRow, Typography } from '@mui/material'

import useTable from '../hooks/useTable'

const headCells = [
    { id: 'companies', label: 'companies' },
    { id: 'context', label: 'context' },
    { id: 'question', label: 'question' },
    { id: 'url', label: 'result url' },
    { id: 'title', label: 'title' },
]

function Table() {
    const [selected, setSelected] = useState([])

    const [signals, setSignals] = useState([
        {
            id: '1',
            companies: 'google.com',
            context: 'clean energy',
            question: 'hydrogen',
            resultUrl: 'www.google.com',
            title: 'clean energy cost clean energy cost clean energy cost clean energy cost',
        },
        {
            id: '2',
            companies: 'polaris.com',
            context: 'clean energy',
            question: 'hydrogen',
            resultUrl: 'www.polaris.com',
            title: 'clean energy cost',
        },
        {
            id: '3',
            companies: 'polaris.com',
            context: 'clean energy',
            question: 'hydrogen',
            resultUrl: 'www.polaris.com',
            title: 'clean energy cost',
        },
        {
            id: '4',
            companies: 'polaris.com',
            context: 'clean energy',
            question: 'hydrogen',
            resultUrl: 'www.polaris.com',
            title: 'clean energy cost',
        },
        {
            id: '5',
            companies: 'polaris.com',
            context: 'clean energy',
            question: 'hydrogen',
            resultUrl: 'www.polaris.com',
            title: 'clean energy cost',
        },
        {
            id: '6',
            companies: 'polaris.com',
            context: 'clean energy',
            question: 'hydrogen',
            resultUrl: 'www.polaris.com',
            title: 'clean energy cost',
        },
    ])

    const [filterFunction, setFilterFunction] = useState({
        fn: (items) => {
            return items
        },
    })

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = signals.map((item) => item.id)
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
        signals,
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
                                role='checkbox'
                                selected={isItemSelected}
                                aria-checked={isItemSelected}>
                                <TableCell padding='checkbox'>
                                    <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, id)} />
                                </TableCell>
                                <TableCell sx={{ borderRight: '8px solid #fff' }}>{companies}</TableCell>
                                <TableCell>{context}</TableCell>
                                <TableCell>{question}</TableCell>
                                <TableCell
                                    sx={{
                                        textDecoration: 'underline',
                                        '::first-letter': { textTransform: 'lowercase' },
                                    }}>
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

export default Table

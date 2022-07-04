import { useState } from 'react'

// MUI
import { Checkbox, Paper, TableBody, TableCell, TableRow, Typography } from '@mui/material'

//
import Heatmap from '../components/Heatmap'
import useTable from '../hooks/useTable'
import Table from '../components/Table'
import TagsInput from '../components/controls/TagsInput'

const headCells = [
    { id: 'companies', label: 'companies' },
    { id: 'context', label: 'context' },
    { id: 'question', label: 'question' },
    { id: 'url', label: 'result url' },
    { id: 'title', label: 'title' },
]

const Result = () => {
    const [selected, setSelected] = useState([])
    const [data, setData] = useState([
        {
            name: 'Clean Energy, Hydrogen',
            data: [
                { x: 'polaris.com', y: 10 },
                { x: 'brb.com', y: 10 },
                { x: 'tesla.com', y: 0 },
                { x: 'google.com', y: 10 },
            ],
        },
        {
            name: 'Hydrogen',
            data: [
                { x: 'polaris.com', y: 10 },
                { x: 'brb.com', y: 0 },
                { x: 'tesla.com', y: 10 },
                { x: 'google.com', y: 5 },
            ],
        },
        {
            name: 'Clean Energy',
            data: [
                { x: 'polaris.com', y: 10 },
                { x: 'brb.com', y: 10 },
                { x: 'tesla.com', y: 10 },
                { x: 'google.com', y: 10 },
            ],
        },
    ])
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
            <Paper variant='outlined' square  sx={{ p: 5, my: 8, overflow: 'auto' }}>
                <Heatmap series={data} />
            </Paper>

            <Typography variant='h3' gutterBottom>
                Signals
            </Typography>

            <Paper variant='outlined' square sx={{ mb: 12, px: 1 }}>
                <Table />
            </Paper>
        </>
    )
}

export default Result

// ----------------------------------------------------------------------

export default function Table(theme) {
    return {
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                },
            },
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    borderCollapse: 'separate',
                    borderSpacing: '0 10px',
                    border: 'transparent',

                    '&.MuiTable-root th, &.MuiTable-root td': {
                        borderTop: '0 ',
                        borderBottom: '0',
                    },
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    textTransform: 'uppercase',
                },
            },
        },
        MuiTableBody: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.grey[200],

                    '& ::first-letter': {
                        textTransform: 'uppercase',
                      }
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    textTransform: 'uppercase',
                },
                body: {
                  ...theme.typography.body1,
                  maxWidth: 200,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis'
                }
            },
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    textTransform: 'uppercase',
                    display: 'flex',
                    justifyContent: 'center',

                    '& span.pageNumber': {
                        border: `1px solid ${theme.palette.primary.main}`,
                        padding: theme.spacing(0.8, 3)
                    }
                },
            },
        },
    }
}

// ----------------------------------------------------------------------

export default function Select(theme) {
    return {
        MuiSelect: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 0,
                    border: `1px solid ${theme.palette.primary.main}`,
                    '&:hover': { backgroundColor: theme.palette.action.hover }
                    
                },
                outlined: {
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 0,
                    border: `1px solid ${theme.palette.primary.main}`,
                    paddingLeft: theme.spacing(2),
                    '&:hover': { backgroundColor: theme.palette.action.hover }
                    
                },
                select: {
                    paddingLeft: theme.spacing(1),
                    '&:focus': { backgroundColor: theme.palette.grey[200], },
                }
            },
        },
    }
}

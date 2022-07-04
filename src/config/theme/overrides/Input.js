// ----------------------------------------------------------------------

export default function Input(theme) {
    return {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        '& svg': { color: theme.palette.text.disabled },
                    },
                },
                input: {
                    '&::placeholder': {
                        opacity: 1,
                        color: theme.palette.text.primary,
                    },
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    'label + &': {
                        marginTop: theme.spacing(4),
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    alignItems: 'flex-start',
                    minHeight: 100,
                    borderRadius: 0,
                    backgroundColor: theme.palette.grey[200],
                    border: `1px solid ${theme.palette.primary.main}`,
                },
            },
        }
    }
}

// ----------------------------------------------------------------------

export default function InputLabel(theme) {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {},
        // Styles applied to the input element if shrink={true}
        shrink: {
          color: theme.palette.primary.main,
          ...theme.typography.h6,
          '& .optional': {
            ...theme.typography.body1
          }
        }
      }
    }
  }
}

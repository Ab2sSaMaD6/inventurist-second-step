// ----------------------------------------------------------------------

export default function Autocomplete(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z20,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0
        }
      }
    }
  }
}

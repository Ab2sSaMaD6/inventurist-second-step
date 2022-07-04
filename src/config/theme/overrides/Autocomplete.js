// ----------------------------------------------------------------------

export default function Autocomplete(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          
        },
        paper: {
          boxShadow: theme.customShadows.z20,
          borderTopLeftRadius:  0,
          borderTopRightRadius:  0,
        },
        listbox: {


        },
        popper: {

        }
      }
    }
  }
}

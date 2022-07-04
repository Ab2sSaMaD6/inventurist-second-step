// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          '&:hover': {
            boxShadow: 'none'
          }
        },
        sizeLarge: {
          height: 48
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          '&:hover': {
            backgroundColor: theme.palette.grey[400]
          }
        },
        containedPrimary: {
          boxShadow: theme.customShadows.primary,
          borderRadius: 0,
          maxWidth: '250px',
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        },
        text: {
          textDecoration: 'underline',
          '&:hover': {
            textDecoration: 'underline',
            backgroundColor: theme.palette.action.hover
          }
        }
      }
    }
  };
}

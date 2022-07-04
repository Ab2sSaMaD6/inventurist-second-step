// material
import { AppBar, Link, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const APP_BAR_MOBILE = 24
const APP_BAR_DESKTOP = 52

const RootStyle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
  alignItems: 'center',
  overflow: 'hidden'
})

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  width: '100%',

  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(6),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),

  [theme.breakpoints.up('sm')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  },
  [theme.breakpoints.up('md')]: {
    width: '80%'
  },
  [theme.breakpoints.up('lg')]: {
    width: '70%'
  }
}))

// ----------------------------------------------------------------------

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://inventurist.ai/" target="_blank">
        inventurist.ai
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const Layout = ({ children }) => {
  return (
    <RootStyle>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="primary" noWrap>
            Inventurist
          </Typography>
        </Toolbar>
      </AppBar>

      {/* main content */}
      <MainStyle>{children}</MainStyle>

      <Copyright />
    </RootStyle>
  )
}

export default Layout

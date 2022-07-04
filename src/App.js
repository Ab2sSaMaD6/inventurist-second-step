import Layout from './components/Layout'

import ThemeProvider from './config/theme'
import Main from './pages/Main'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Main />
      </Layout>
    </ThemeProvider>
  )
}

export default App

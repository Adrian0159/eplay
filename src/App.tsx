import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles'
import Header from './components/Header'
import Rotas from './Routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App

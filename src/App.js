import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { BreakpointProvider } from 'react-socks'

// Pages
import Home from './pages/home/Home'
import DetailPage from './pages/detailPage/DetailPage'

// Components
import Stars from './components/stars/Stars'

function App() {
  return (
    <BrowserRouter>
      <BreakpointProvider>
        <div className='stars-bg'>
          <Stars />
        </div>
        <header>
          <h1 className='fade-in'>The Solar System</h1>
        </header>
        <main className='container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/:name' component={DetailPage} />
          </Switch>
        </main>
      </BreakpointProvider>
    </BrowserRouter>
  )
}

export default App

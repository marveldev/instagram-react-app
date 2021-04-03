import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Settings, TopNav } from './components'
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNav />
        <Switch>
          <Route path="/"
            component={() => (
              <Home />
            )}
            exact
          />
        </Switch>
        <Switch>
          <Route path="/settings"
            component={() => (
              <Settings />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

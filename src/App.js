import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Settings, TopNav } from './components'
import './index.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

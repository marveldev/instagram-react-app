import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Settings, TopNav } from './components'
import './index.css'

const App = () => {
  const [bio, setBio] = useState()

  return (
    <BrowserRouter>
      <div className="App">
        <TopNav />
        <Switch>
          <Route path="/"
            component={() => (
              <Home
                bio={bio}
              />
            )}
            exact
          />
          <Route path="/settings"
            component={() => (
              <Settings
                setBio={setBio}
                bio={bio}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

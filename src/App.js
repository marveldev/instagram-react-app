import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Settings, TopNav } from './components'
import { bioActions, galleryActions } from './redux/slice'
import database from './dataBase'
import './index.scss'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    database.bio.toArray()
      .then(bioData => {
        dispatch(bioActions.setBio(bioData[0]))
      })

    database.gallery.toArray()
      .then(galleryData => {
        dispatch(galleryActions.addGallery(galleryData))
      })
  },[dispatch])

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

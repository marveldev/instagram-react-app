import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Settings, TopNav } from './components'
import { bioActions } from './components/bio/slice'
import { galleryActions } from './components/gallery/slice'
import database from './database'
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
        dispatch(galleryActions.addMultiplePosts(galleryData.reverse()))
        dispatch(galleryActions.setFetchStatus('success'))
      })
      .catch(() => galleryActions.setFetchStatus('error'))
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

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Settings, TopNav } from './components'
import { bioActions } from './components/bio/slice'
import { galleryActions } from './components/gallery/slice'
import MobilePostPage from './components/singlePost/MobilePostPage'
import database from './database'
import './index.scss'
import './common/theme.scss'

const App = () => {
  const dispatch = useDispatch()
  const { theme } = useSelector(state => state.theme)

  useEffect(() => {
    database.bio.toArray()
      .then(bioData => {
        dispatch(bioActions.setBio(...bioData))
      })

    database.posts.toArray()
      .then(postData => {
        dispatch(galleryActions.addMultiplePosts(postData.reverse()))
        dispatch(galleryActions.setFetchStatus('success'))
      })
      .catch(() => galleryActions.setFetchStatus('error'))

    database.comments.toArray()
      .then(commentData => {
        dispatch(galleryActions.addMultipleComments(commentData))
      })
  },[dispatch])

  return (
    <BrowserRouter>
      <div className={`app-layer ${theme}`}>
        <TopNav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/settings" component={Settings} />
          <Route path="/mobilePostPage/:postId" component={MobilePostPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

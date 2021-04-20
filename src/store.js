import { configureStore } from '@reduxjs/toolkit'
import { bioReducers } from './components/bio/slice'
import { galleryReducers } from './components/gallery/slice'

export default configureStore({
  reducer: {
    bio: bioReducers,
    gallery: galleryReducers,
  }
})

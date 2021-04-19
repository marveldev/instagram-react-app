import { configureStore } from '@reduxjs/toolkit'
import { bioReducers, galleryReducers } from './slice'

export default configureStore({
  reducer: {
    bio: bioReducers,
    gallery: galleryReducers,
  }
})

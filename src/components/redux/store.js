import { configureStore } from '@reduxjs/toolkit'
import { bioReducers, galleryCountReducer, galleryReducers } from './slice'

export default configureStore({
  reducer: {
    bio: bioReducers,
    gallery: galleryReducers,
    galleryCount: galleryCountReducer
  }
})

import { configureStore } from '@reduxjs/toolkit'
import { bioReducers } from './slice'

export default configureStore({
  reducer: {
    bio: bioReducers
  }
})

import { createSlice } from '@reduxjs/toolkit'

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    posts: []
  },
  reducers: {
    addGallery: (state, { payload }) => {
      state.posts = [payload, ...state.posts]
    }
  }
})

const { actions: galleryActions, reducer: galleryReducers } = gallerySlice

export { galleryActions, galleryReducers }

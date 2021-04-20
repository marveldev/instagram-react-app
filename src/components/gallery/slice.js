import { createSlice } from '@reduxjs/toolkit'

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    gallery: []
  },
  reducers: {
    addGallery: (state, { payload }) => {
      state.gallery = [payload, ...state.gallery]
    }
  }
})

const { actions: galleryActions, reducer: galleryReducers } = gallerySlice

export { galleryActions, galleryReducers }

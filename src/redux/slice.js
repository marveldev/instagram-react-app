import { createSlice } from '@reduxjs/toolkit'

const bioSlice = createSlice({
  name: 'bio',
  initialState: {
    bio: null
  },
  reducers: {
    setBio: (state, { payload }) => {
      state.bio = payload
    }
  }
})

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

const { actions: bioActions, reducer: bioReducers } = bioSlice
const { actions: galleryActions, reducer: galleryReducers } = gallerySlice

export {
  bioActions, bioReducers, galleryActions, galleryReducers
}

import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice(
  {
    name: 'bio',
    initialState: {bio: undefined},
    reducers: {
      setBio: (state, action) => {
        state.bio = action.payload
      }
    }
  }
)

const gallerySlice = createSlice(
  {
    name: 'gallery',
    initialState: {
      gallery: []
    },
    reducers: {
      addGallery: (state, action) => {
        state.gallery = [action.payload, ...state.gallery]
      }
    }
  }
)

const { actions: bioActions, reducer: bioReducers } = todoSlice
const { actions: galleryActions, reducer: galleryReducers } = gallerySlice

export { bioActions, bioReducers, galleryActions, galleryReducers}

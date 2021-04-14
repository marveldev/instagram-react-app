import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice(
  {
    name: 'bio',
    initialState: {bio: null},
    reducers: {
      setBio: (state, { payload }) => {
        state.bio = payload
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
      addGallery: (state, { payload }) => {
        state.gallery = [payload, ...state.gallery]
      }
    }
  }
)

const galleryCounter = createSlice({
  name: 'galleryCount',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value++
    }
  }
})

const { actions: bioActions, reducer: bioReducers } = todoSlice
const { actions: galleryActions, reducer: galleryReducers } = gallerySlice
const { actions: galleryCounterAction, reducer: galleryCountReducer } = galleryCounter

export {
  bioActions, bioReducers, galleryActions,
  galleryReducers, galleryCounterAction, galleryCountReducer
}

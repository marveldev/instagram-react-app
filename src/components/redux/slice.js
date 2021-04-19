import { createSlice } from '@reduxjs/toolkit'
import database from '../../dataBase'

const request = database.bio.toArray()
const bioData = (async () => await request)()
console.log(bioData);

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

const galleryCountSlice = createSlice({
  name: 'galleryCount',
  initialState: {
    value: 0
  },
  reducers: {
    incrementCount: state => {
      state.value++
    }
  }
})

const { actions: bioActions, reducer: bioReducers } = bioSlice
const { actions: galleryActions, reducer: galleryReducers } = gallerySlice
const { actions: galleryCountAction, reducer: galleryCountReducer } = galleryCountSlice

export {
  bioActions, bioReducers, galleryActions,
  galleryReducers, galleryCountAction, galleryCountReducer
}

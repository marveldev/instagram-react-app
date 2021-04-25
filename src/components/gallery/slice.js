import { createSlice } from '@reduxjs/toolkit'

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    posts: [],
    comments: [],
    fetchStatus: 'loading',
  },
  reducers: {
    setFetchStatus: (state, { payload }) => {
      state.fetchStatus = payload
    },
    addPost: (state, { payload }) => {
      state.posts = [payload, ...state.posts]
    },
    addMultiplePosts: (state, { payload }) => {
      state.posts = [...payload, ...state.posts]
    },
    addComment: (state, { payload }) => {
      state.comments = [...state.comments, payload]
    },
    addMultipleComments: (state, { payload }) => {
      state.comments = [...payload, ...state.comments]
    }
  }
})

const { actions: galleryActions, reducer: galleryReducers } = gallerySlice

export { galleryActions, galleryReducers }

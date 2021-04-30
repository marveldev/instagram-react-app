import { createSlice } from '@reduxjs/toolkit'

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    posts: [],
    comments: [],
    selectedPostIndex: null,
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
      state.posts = payload
    },
    addComment: (state, { payload }) => {
      state.comments = [...state.comments, payload]
    },
    addMultipleComments: (state, { payload }) => {
      state.comments = payload
    },
    setSelectedPostIndex: (state, { payload }) => {
      state.selectedPostIndex = payload
    }
  }
})

const { actions: galleryActions, reducer: galleryReducers } = gallerySlice

export { galleryActions, galleryReducers }

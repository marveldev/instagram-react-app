import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: localStorage.getItem('storedTheme')
  },
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload
    }
  }
})

const { actions: themeActions, reducer: themeReducers } = themeSlice

export { themeActions, themeReducers }

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

const { actions: bioActions, reducer: bioReducers } = bioSlice

export { bioActions, bioReducers }

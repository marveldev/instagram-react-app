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

const { actions: bioActions, reducer: bioReducers } = todoSlice
export { bioActions, bioReducers}

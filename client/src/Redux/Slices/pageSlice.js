import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    value: 'home',
  },
  reducers: {
    home: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value = 'home'
    },
    about: (state) => {
      state.value = 'about'
    },
    blogGrid: (state) => {
      state.value = 'blogGrid'
    },
    blogDetail: (state) => {
      state.value = 'blogDetail'
    },
    contact: (state) => {
      state.value = 'contact'
    },
  },
})

// Action creators are generated for each case reducer function
export const { home, about, blogGrid, blogDetail, contact } = pageSlice.actions

export default pageSlice.reducer
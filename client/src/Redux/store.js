import { configureStore } from '@reduxjs/toolkit'
import { pageSlice } from './Slices/pageSlice'

export default configureStore({
  reducer: {
    page: pageSlice.reducer
  },
})
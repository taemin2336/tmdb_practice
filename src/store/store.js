import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from '../features/sliceNow'

const store = configureStore({
   reducer: {
      movies: moviesReducer,
   },
})

export default store

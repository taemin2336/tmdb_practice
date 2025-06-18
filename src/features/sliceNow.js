import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getGenre, getNow, getNowDetail } from '../api/movieApi'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await getNow()
   return response.data.results
})

export const fetchDetailMovies = createAsyncThunk('movies/fetchDetailMovies', async (movieId) => {
   const response = await getNowDetail(movieId)
   return response.data
})

export const fetchGenres = createAsyncThunk('movies/fetchGernes', async () => {
   const response = await getGenre()
   return response.data.genres
})

const movieSlice = createSlice({
   name: 'movies',
   initialState: {
      movies: [],
      movieDetail: null,
      movieGenres: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            state.movies = action.payload
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchDetailMovies.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchDetailMovies.fulfilled, (state, action) => {
            state.loading = false
            state.movieDetail = action.payload
         })
         .addCase(fetchDetailMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchGenres.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchGenres.fulfilled, (state, action) => {
            state.loading = false
            state.movieGenres = action.payload
         })
         .addCase(fetchGenres.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default movieSlice.reducer

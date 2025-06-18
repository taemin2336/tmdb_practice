import axios from 'axios'

const fetch_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = import.meta.env.VITE_TMDB_API_KEY

const tmdbApi = axios.create({
   baseURL: fetch_URL,
   headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
   },
})

export const getNow = async (page = 1) => {
   const response = await tmdbApi.get('/movie/now_playing', {
      params: {
         language: 'ko-KR',
         page,
         region: 'KR',
      },
   })
   return response
}

export const getNowDetail = async (movieId) => {
   const response = await tmdbApi.get(`/movie/${movieId}`, {
      params: {
         language: 'ko-KR',
      },
   })
   return response
}

export const getGenre = async () => {
   const response = await tmdbApi.get('/genre/movie/list', {
      params: {
         language: 'ko-KR',
      },
   })
   return response
}

export default tmdbApi

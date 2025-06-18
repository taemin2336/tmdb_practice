import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetailMovies } from '../features/sliceNow'
import { useParams } from 'react-router-dom'

function MovieDetail() {
   const { movieId } = useParams()
   const dispatch = useDispatch()
   const { movieDetail, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      if (movieId) {
         dispatch(fetchDetailMovies(movieId))
      }
   }, [dispatch, movieId])

   if (loading) return <p>로딩중</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div>
         {movieDetail && (
            <div>
               <div>
                  <img src={`https://image.tmdb.org/t/p/w400${movieDetail.poster_path}`} alt={movieDetail.title} width="270" />
               </div>
               <div>
                  <h2>{movieDetail.title}</h2>

                  <h3>줄거리</h3>
                  <p>{movieDetail.overview}</p>

                  <h3>장르</h3>
                  <p>{movieDetail.genres.map((genre) => `${genre.name}`).join(', ')}</p>

                  <h3>개봉일</h3>
                  <p>{movieDetail.release_date}</p>

                  <h3>평점</h3>
                  <p>{movieDetail.vote_average}</p>
               </div>
            </div>
         )}
      </div>
   )
}

export default MovieDetail

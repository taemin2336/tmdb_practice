import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../features/sliceNow'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Gernes from './Genres'

function MovieMain() {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      dispatch(fetchMovies())
   }, [dispatch])

   if (loading) return <p>로딩중입니다.</p>
   if (error) return <p>에러입니다. {error}</p>
   return (
      <div>
         <h1>지금 상영중인 영화입니다.</h1>
         <Link to={'/genre'}>
            <button style={{ border: '1px solid, black' }}>장르 종류</button>
         </Link>

         <ul>
            {movies.map((movie) => (
               <Link key={movie.id} to={`/detail/${movie.id}`}>
                  <li>{movie.title}</li>
               </Link>
            ))}
         </ul>
      </div>
   )
}

export default MovieMain

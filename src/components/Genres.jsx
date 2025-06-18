import { useDispatch, useSelector } from 'react-redux'
import { fetchGenres } from '../features/sliceNow'
import { useEffect } from 'react'

function Gernes() {
   const dispatch = useDispatch()
   const { movieGenres, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      dispatch(fetchGenres())
   }, [dispatch])

   if (loading) return <p>로딩중입니다.</p>
   if (error) return <p>에러입니다. {error}</p>

   return (
      <div>
         <h1>장르 종류</h1>
         {movieGenres.map((genre) => {
            return <li key={genre.id}>{genre.name}</li>
         })}
      </div>
   )
}

export default Gernes

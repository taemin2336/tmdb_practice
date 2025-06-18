import Gernes from './components/Genres'
import MovieDetail from './components/MovieDetail'
import MovieMain from './components/MovieMain'
import { Route, Routes } from 'react-router-dom'

function App() {
   return (
      <Routes>
         <Route path="/" element={<MovieMain />} />
         <Route path="/genre" element={<Gernes />} />
         <Route path="/detail/:movieId" element={<MovieDetail />} />
      </Routes>
   )
}

export default App

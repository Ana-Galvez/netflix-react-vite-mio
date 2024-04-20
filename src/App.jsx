import './App.css'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DescripcionPrueba from './Pages/DescripcionPrueba'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/descripcionprueba' element={<DescripcionPrueba/>}/>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

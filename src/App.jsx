import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import CardPage from "./component/CardPage"
import Movies from './component/Movies'
import "./App.css"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />

        <Route path='/movies/:id' element={<CardPage />} />

      </Routes>
    </>
  )
}

export default App
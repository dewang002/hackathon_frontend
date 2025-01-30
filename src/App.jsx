import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './component/Nav'
import Home from './component/Home'

const App = () => {
  return (
    
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>

  )
}

export default App
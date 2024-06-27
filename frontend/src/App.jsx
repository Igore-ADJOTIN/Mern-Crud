import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ShowBooks from './pages/showBooks'
import Home from './pages/home'
import CreateBooks from './pages/createBooks'
import EditBooks from './pages/editBooks'
import DeleteBooks from './pages/deleteBooks'

function App() {
  return (
    <Routes>

      <Route path='/' element={<Home />} />

      <Route path='/books/create' element={<CreateBooks />} />

      <Route path='/books/details/:id' element={<ShowBooks />} />

      <Route path='/books/delete/:id' element={<DeleteBooks />} />

      <Route path='/books/edit/:id' element={<EditBooks />} />

      
    </Routes>
  )
}

export default App
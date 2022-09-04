import React from 'react'
import { Header } from '../Header'
import { Home } from '../Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Servicio } from '../Servicios'

export const Layout = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/servicio' element={<Servicio />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Layout;

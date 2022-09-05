import React from 'react'
import { Header } from '../Header'
import { Home } from '../Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Servicio } from '../Servicios'
import { Footer } from '../Footer'

export const Layout = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
      <main className="flex-1 flex-grow">
      <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/servicio' element={<Servicio />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default Layout;

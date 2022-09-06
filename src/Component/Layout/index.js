import React from 'react'
import { Header } from '../Header'
import { Home } from '../Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Servicio } from '../Servicios'
import { Footer } from '../Footer'
import { Contact } from '../Contact'
import { Login } from '../Login'

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/servicio' element={<Servicio />}/>
            <Route exact path='/contact' element={<Contact />}/>
            <Route exact path='/login' element={<Login />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Layout;

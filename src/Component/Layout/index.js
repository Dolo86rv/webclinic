import React from 'react'
import { Header } from '../Header'
import { Home } from '../Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Servicio } from '../Service'
import { Footer } from '../Footer'
import { Contact } from '../Contact'
import { Login } from '../Login'
import { PageNotFound } from '../PagenNotFound'
import { RequestService } from '../RequestService'
import { AboutUs } from '../AboutUs'
import { SearchResult } from '../SearchResult'
import { Register } from '../Register'

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/servicio' element={<Servicio />}/>
            <Route exact path='/contact' element={<Contact />}/>
            <Route exact path='/aboutus' element={<AboutUs/>} />
            <Route exact path='/login' element={<Login />}/>
            <Route exact path='/reserve' element={<RequestService />}/>
            <Route exact path='' element={<PageNotFound />} />
            <Route exact path='/search/:keyword' element={< SearchResult />} />
            <Route exact path='/register' element={ <Register />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Layout;

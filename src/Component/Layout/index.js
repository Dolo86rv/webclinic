import React from 'react'
import { Header } from '../Header';
import { Home } from '../Home';

export const Layout = () => {
  return (
    <div className="overflow-y-hidden w-full bg-c-fondo">
      <Header />
      <Home />
    </div>
  )
}

export default Layout;

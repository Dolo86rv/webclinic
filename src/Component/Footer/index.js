import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export const Footer = () => {
  return (
    <footer className="bg-c-malva mt-12 sticky top-full">
      <div className="max-w-7xl">
        <Link className="logo text-3xl text-c-fondo ml-2 pb-2 sm:text-4xl sm:ml-20 sm:mr-2" to='/'>Quiromasaje</Link>
      </div>
    </footer>
  )
}

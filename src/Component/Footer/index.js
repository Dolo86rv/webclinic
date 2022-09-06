import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export const Footer = () => {
  return (
    <footer className="bg-c-malva mt-12 sticky top-full">
      <div className="max-w-7xl mt-2 ml-2 sm:ml-20 sm:mr-2">
        <Link className="logo text-3xl text-c-fondo pb-2 sm:text-4xl" to='/'>Quiromasaje</Link>
      </div>
      <div className="flex flex-col-reverse justify-between py-6 px-4 ml-2 sm:flex-row sm:px-14 sm:pt-10 md:pb-6">
          <p className="items-center font-medium text-xs text-white not-italic mt-6 sm:mt-0">Copyright © 2022.</p>
          <div className="flex flex-col md:flex-row md:items-center">
            <Link to="/politicadeprivacidad" className=" text-white font-medium text-xs not-italic underline hover:text-turquee mr-0 mb-2 sm:mb-0 sm:mr-8">Política de privacidad</Link>
            <Link to="/politicadeconflictosdeinteres" className="text-white font-medium text-xs not-italic underline hover:text-turquee mb-2 sm:mb-0 sm:mr-8">Política de conflictos de interés</Link>
          </div>
        </div>
    </footer>
  )
}

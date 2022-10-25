import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { TabRedsocial } from '../Assistant/tabredsocial'

export const Copyrigth = () => {
  return (
    <div className="flex flex-col justify-between sm:items-center py-6 px-4 ml-2 sm:flex-row sm:px-14 sm:pt-6 md:pb-2">
        <div className="">
          <p className="font-medium text-xs text-white not-italic">Copyright © 2022.</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <Link to="/politicadeprivacidad" className=" text-white font-medium text-xs not-italic underline hover:text-turquee mr-0 mb-2 sm:mb-0 sm:mr-8 pt-2 sm:pt-0">Política de privacidad</Link>
          <Link to="/politicadeconflictosdeinteres" className="text-white font-medium text-xs not-italic underline hover:text-turquee mb-2 sm:mb-0 sm:mr-8 pt-2 sm:pt-0">Términos y condiciones</Link>
        </div>
        <TabRedsocial />
      </div>
  )
}

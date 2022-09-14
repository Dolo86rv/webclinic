import React from 'react'
import { AboutUs } from './aboutus'
import { Contact } from './contact'
import { Copyrigth } from './copyrigth'
import { Service } from './service'

export const Footer = () => {
  return (
    <footer className="bg-c-malva mt-12 h-full">
      <div className="max-w-full h-96 flex flex-col flex-wrap justify-between items-center sm:flex-row mt-4 mx-2 sm:mx-20 sm:mt-6">
        <AboutUs />
        <Service />
        <Contact />
      </div>
      <Copyrigth />
    </footer>
  )
}

import React from 'react'
import { AboutUs } from './aboutus'
import { Contact } from './contact'
import { Copyrigth } from './copyrigth'
import { Service } from './service'

export const Footer = () => {
  return (
    <footer className="bg-c-malva mt-12 sticky top-full">
      <div className=" max-w-full flex flex-col justify-between items-center mt-4 mx-2 sm:mx-20 sm:mt-6 sm:flex-row ">
        <AboutUs />
        <Service />
        <Contact />
      </div>
      <Copyrigth />
    </footer>
  )
}

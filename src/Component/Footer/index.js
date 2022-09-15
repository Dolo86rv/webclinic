import React from 'react'
import { AboutUs } from './aboutus'
import { Contact } from './contact'
import { Copyrigth } from './copyrigth'
import { Service } from './service'

export const Footer = () => {
  return (
    <footer>
      <div className="bg-c-malva w-full mt-14">
        <div className="max-w-7xl mx-4 md:mx-20 grid md:grid-cols-2 1lg:grid-cols-3 gap-12 mt-8 sm:mt-10">
          <AboutUs />
          <Service />
          <Contact />
        </div>
        <Copyrigth />
      </div>
    </footer>
  )
}



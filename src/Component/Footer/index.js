import React from 'react'
import { AboutUs } from './aboutus'
import { Contact } from './contact'
import { Copyrigth } from './copyrigth'
import { Service } from './service'

export const Footer = () => {
  return (
    <footer>
      <div className="bg-c-malva w-full mt-12">
        <div className="max-w-full flex flex-col flex-wrap sm:flex-row sm:justify-between mt-4 mx-2 sm:mx-20 sm:mt-6">
          <AboutUs />
          <Service />
          <Contact />
        </div>
        <Copyrigth />
      </div>
    </footer>
  )
}

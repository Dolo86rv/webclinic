import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import instagram from '../../img/instagram-28x.webp'
import whatsapp from '../../img/whatsapp-28x28.webp'
import twitter from '../../img/twitt-28x28.webp'
import facebook from '../../img/facebok-28x28.webp'
import { Fecha } from '../Fecha'
import { Navbar } from './navbar'
import { Button } from '../Assistant/buttonPurple'
import { ButtonWhite } from '../Assistant/buttonWhite'
import { Login } from '../Login'
//import { Login } from '../Login'

export const Header = () => {
  
  return (
    <header className="header fixed top-0 w-full h-fit z-50 overflow-hidden">
      <div className="flex flex-col justify-between max-h-56 bg-c-malva sm:h-14 sm:flex-row sm:items-center">
        <div className="flex items-center ml-2 sm:ml-4 ">
          <Link className="flex-none" to='/'>
            <img className=" " src={facebook} width={40} height={40} alt=''/>
          </Link> 
          <Link className="pr-4 flex-none" to='/'>
            <img className="" src={twitter} width={35} height={35} alt='' />
          </Link>
          <Link className="pr-4 flex-none" to='/'>
            <img className="" src={whatsapp} width={20} height={20} alt='' />
          </Link>
          <Link className="flex-none" to='/'>
            <img className="" src={instagram} width={20} height={20} alt='' />
          </Link>
        </div>
        <Fecha />
        <div className="ml-1 my-4 sm:ml-0 sm:my-1 mr-4">
          <ButtonWhite text="Buscar" dir='/' />
          <Button text="Login in" dir='/'  />
        </div>
      </div>
      <Navbar />
    </header>
  )
}

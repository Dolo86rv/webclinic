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

export const Header = () => {
  
  return (
    <header className="header fixed top-0 h-36 s:h-28 w-full z-50 overflow-hidden">
      <div className="flex justify-between flex-wrap h-20 s:h-14 items-center bg-c-malva ">
        <div className="flex justify-between items-center ml-1 sm:ml-4">
          <Link className="flex-none" to='/'>
            <img className=" " src={facebook} width={35} height={35} alt=''/>
          </Link> 
          <Link className="pr-4 flex-none" to='/'>
            <img className="" src={twitter} width={30} height={30} alt='' />
          </Link>
          <Link className="pr-4 flex-none" to='/'>
            <img className="" src={whatsapp} width={20} height={20} alt='' />
          </Link>
          <Link className="flex-none" to='/'>
            <img className="" src={instagram} width={20} height={20} alt='' />
          </Link>
        <Fecha />
        </div>
        <div className="mr-4">
          <ButtonWhite text="Buscar" />
          <Button text="Login in"  />
        </div>
      </div>
      <Navbar />
    </header>
  )
}

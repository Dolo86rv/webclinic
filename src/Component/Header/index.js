import React from 'react'
import instagram from '../../img/instagram-28x.webp'
import whatsapp from '../../img/whatsapp-28x28.webp'
import twitter from '../../img/twitt-28x28.webp'
import facebook from '../../img/facebok-28x28.webp'
import cuerpo from '../../img/cuerpo160x79.png'

export const Header = () => {
  return (
    <nav className="flex fixed top-0 w-full min-w-full h-40 bg-head-lienzo bg-no-repeat bg-cover shadow-2xl">
      <img className='flex-none top-0 left-0 mr-2' src={cuerpo} alt=""></img>
      <div className="flex-1 ml-32 mt-7">
          <p className='logo text-c-malva text-5xl pb-2 font-medium'>Valentina Delgado</p>
          <p className='text-3xl pt-2 ml-16'>Quiromasaje</p>
        </div>
        <div className="flex-1 self-end justify-end">
          <img className="pb-4" src={whatsapp} width={28} height={28} alt=''></img> 
        </div>
    </nav>
  )
}

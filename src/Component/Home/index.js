import React from 'react'
import chiromassage from '../../img/quiromasaje-1440x455.webp'
import { Section1 } from './section1'
import { ButtonTransparent } from '../Assistant/buttonTransparent'
import chiro250 from '../../img/quiromasaje-250.avif'
import chiro640 from '../../img/quiromasaje-640.avif'
import chiro768 from '../../img/quiromasaje-768.avif'
import chiro1024 from '../../img/quiromasaje-1024.avif'
import { Galeria } from './section2'

export const Home = () => {
  

  return (
    <div className="flex-grow mt-[136px] 4s:mt-[116px] sm:mt-14 max-w-full">
      <div className="flex flex-col justify-end items-end max-w-xs overflow-hidden s:max-w-full s:justify-center s:items-center ">
          <div className="w-full relative">
            <picture>
              <source media="(min-width: 1200px)" srcSet={chiromassage} />
              <source media="(min-width: 800px)" srcSet={chiro1024} />
              <source media="(min-width: 640px)" srcSet={chiro768}/>
              <source media="(min-width: 250px)" srcSet={chiro640}/>

              <img src={chiro250} alt='Imagen de fondo' className="max-w-full h-auto" width="100%" />
            </picture>
          </div>
          <div className="absolute">
            <p className="texto2 font-bold text-c-fondo tracking-wider flex-none text-xl sm:text-4xl md:text-6xl">Salud y bienestar al alcance de todos...</p>
            <div className="pt-20 text-center hidden md:block">
              <ButtonTransparent text="Leer más" dir='#section1' />
            </div>
          </div>
      </div>  
      <Section1 />  
      <Galeria />
    </div>
  )
}

/*<div className="flex-grow mt-[136px] 4s:mt-[116px] sm:mt-14 max-w-full">
      <div className="flex flex-col justify-end items-end max-w-xs overflow-hidden s:max-w-full s:justify-center s:items-center ">
          <div className="relative w-full">
            <picture>
              <source media="(min-width: 1200px)" srcSet={chiromassage} />
              <source media="(min-width: 800px)" srcSet={chiro1024} />
              <source media="(min-width: 640px)" srcSet={chiro768}/>
              <source media="(min-width: 250px)" srcSet={chiro640}/>

              <img src={chiro250} alt='' className="max-w-full h-auto" width="100%" />
            </picture>
          </div>
          <div className="absolute z-10 p-8">
            <p className="texto2 font-bold text-c-fondo tracking-wider flex-none text-xl sm:text-4xl md:text-6xl">Salud y bienestar al alcance de todos...</p>
          </div>
          <div className="absolute mt-64 xl:mt-96 hidden md:block py-1">
            <ButtonTransparent text="Leer más" dir='#section1' />
          </div>
      </div>  
      <Section1 />  
    </div>*/
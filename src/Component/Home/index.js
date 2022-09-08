import React from 'react'
import chiromassage from '../../img/quiromasaje-1440x455.webp'
import { Section1 } from './section1'
import { Button } from '../Assistant/buttonPurple'
import { ButtonTransparent } from '../Assistant/buttonTransparent'
//import { Picture }  from 'react-responsive-picture'
//import { Background } from 'react-imgix'
//import chiro250 from '../../img/quiromasaje-250.avif'
//import chiro640 from '../../img/quiromasaje-640.avif'
//import chiro768 from '../../img/quiromasaje-768.avif'
//import chiro1024 from '../../img/quiromasaje-1024.avif'

export const Home = () => {
  

  return (
    <div className="flex-grow mt-[111px] sm:mt-14 max-w-[1440]">
      <div className="flex flex-col justify-end items-end max-w-xs overflow-hidden s:max-w-full s:justify-center s:items-center ">
          <div className="w-full">
            <img className="object-cover" src={chiromassage} alt='' width='100%' /> 
          </div>
          <div className="absolute p-8">
            <p className="texto2 text-xl font-bold text-c-fondo tracking-wider flex-none sm:text-4xl md:text-6xl">Salud y bienestar al alcance de todos...</p>
          </div>
          <div className="absolute mt-96 hidden sm:block py-1">
            <ButtonTransparent text="Leer más" dir='#section1' />
          </div>
      </div>  
      <Section1 />  
    </div>
  )
}

/*<Picture>
        <Source src={chiro250} width='250' htmlAttributes={{ media: "(min-width: 250px)" }} />
        <Source src={chiro640} width='640' htmlAttributes={{ media: "(min-width: 640px)" }} />
        <Source src={chiro768} width='768' htmlAttributes={{ media: "(min-width: 768px)" }} />
        <Source src={chiro1024} width='1024' htmlAttributes={{ media: "(min-width: 1024px)" }} />
        
        <Imgix src={chiromassage} imgixParams={{ w: 100}} />
      </Picture>
      
      <picture>
        <source srcSet={chiro640} media='(min-width: 640px)' sizes='100vw' />
        <source srcSet={chiro768} media='(min-width: 768px)' sizes='100vw' />
        <source srcSet={chiro1024} media='(min-width: 1024px)' sizes='100vw' width='100%' />

        <img src={chiromassage} alt='' sizes='100vw' />
      </picture>
      <Link to='/'>
              <img className="" src={arrow} alt="" width={30} height={30} />
      </Link>
      */

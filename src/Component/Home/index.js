import React from 'react'
import chiromassage from '../../img/quiromasaje-1440x455.webp'
//import { Picture }  from 'react-responsive-picture'
//import { Background } from 'react-imgix'
import chiro250 from '../../img/quiromasaje-250.avif'
import chiro640 from '../../img/quiromasaje-640.avif'
import chiro768 from '../../img/quiromasaje-768.avif'
import chiro1024 from '../../img/quiromasaje-1024.avif'

export const Home = () => {
  

  return (
    <div className="mt-14">
      <img src={chiromassage} alt='' width='100%' /> 
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
      */

import React from 'react'
import { Link, Route } from 'wouter'
import { ListOfgifs } from '../Assistant/listOfgifs'

const POPULAR_GIFS = ['cuba', 'venezuela', 'mexico', 'estados unidos']

export const Galeria = () => {
  
  return (
    <div className="max-w-7xl mx-auto my-20">
      <p className="text-center text-c-malva text-xl pb-12 sm:pb-16 font-medium sm:text-4xl">Nuestros Servicios</p>
      <p className="texto2 text-c-rose font-semibold text-xl text-center">Regalarse una sesión de masaje es cuidarse y amarse.</p>  
      <div className="mx-auto">
        <div className=" flex-col">
          <h3 className="text-c-rose">Gifs más populares</h3>
          <ul>
            {POPULAR_GIFS.map((populargifs)=>(
              <li key={populargifs}>
                <Link to={`/search/${populargifs}`}>Gifs de {populargifs}</Link>
              </li>
            ))}
          </ul>
          <Route path='/search/:keyword' component={ ListOfgifs }/>
        </div>
        <div className="mt-12">
        </div>
      </div>

    </div>
  )
}


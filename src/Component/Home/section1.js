import React from 'react'
import { Button } from '../Assistant/buttonPurple'

const listData=[
  {
    id:'definicion',
    title:'Definición',
    description:'El "quiromasaje" es un método de exploración y de tratamiento manual, aplicado sobre la cubierta corporal y trasmitido por la presión mecánica de las manos a los diferentes órganos y tejidos del cuerpo humano, que tiene a la vez, efectos reguladores sobre el dolor, los estados de ánimo, el cansancio...',
    href:'/definicion',
    src: require('../../img/quiro1.webp')
    },
  {
    id:'beneficios',
    title:'Beneficios',
    description:'Combate el lumbago, contracturas dorsales, dolores de hombro, cervicales, etc. Elimina el dolor muscular, tendinitis y alivia problemas de circulación. Recomendable para tratar la ciática o la lumbalgia, esguinces, tortícolis, contracturas, tendinitis o el síndrome de túnel carpiano, entre otras dolencias.', 
    href:'/ventajas',
    src: require('../../img/quiro2.webp')
  },
  {
    id:'contraindicaciones',
    title:'Contraindicaciones',
    description:'Está contraindicada durante los tres primeros meses del embarazo. Enfermedades infecciosas de la piel y otras no infecciosas generalizadas. Úlceras por decúbito y quemaduras. Enfermedades vasculares inflamatorias inflamaciones de los ganglios linfáticos y cadenas ganglionares.',
    href:'/contraindicaciones',
    src: require('../../img/quiro3.webp')
  },
]

export const Section1 = () => {
  return (
    <div className="pt-16 sm:pt-20" id="section1">
      <h1 className="text-center text-c-malva text-xl pb-20 sm:pb-24 font-medium sm:text-4xl">¿Qué sabes de quiromasaje?</h1>
      <div className="flex flex-wrap justify-between px-6 mx-0 sm:mx-20">
      {listData.map((item)=>(
      <div key={item.id} className="max-w-sm my-2 bg-slate-100 rounded-xl shadow-md overflow-hidden">
        <div>
          <div className="md:shrink-0">
              <img className="h-48 w-full object-cover" src={item.src} alt="data" />              
            </div>
          <div className="p-8">
            <div className="texto1 text-center uppercase tracking-wide text-sm text-c-malva font-semibold">{item.title}</div>
            <p className="mt-2 text-slate-500 justify-center items-center">{item.description}</p>
            <div className="pt-8 pl-0 3s:pl-20 1s:pl-52">
              <Button text="Leer más" dir='/'/>
            </div>
          </div>
          
        </div>
      </div>
      ))}
      </div>
    </div>
  )
}

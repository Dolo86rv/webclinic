import React from 'react'
import { Link } from 'react-router-dom'
import Quiro1 from '../../img/quiro1.webp'
import Quiro2 from '../../img/quiro2.webp'
import Quiro3 from '../../img/quiro3.webp'

const listData=[
  {
    id:'definicion',
    title:'Definición',
    description:'El "quiromasaje" es un método de exploración y de tratamiento manual, aplicado sobre la cubierta corporal y trasmitido por la presión mecánica de las manos a los diferentes órganos y tejidos del cuerpo humano, que tiene a la vez, efectos reguladores sobre el dolor, los estados de ánimo, el cansancio...',
    href:'/definicion',
    },
  {
    id:'beneficios',
    title:'Beneficios',
    description:'Combate el lumbago, contracturas dorsales, dolores de hombro, cervicales, etc. Elimina el dolor muscular, tendinitis y alivia problemas de circulación. Recomendable para tratar la ciática o la lumbalgia, esguinces, tortícolis, contracturas, tendinitis o el síndrome de túnel carpiano, entre otras dolencias.', 
    href:'/ventajas',
  },
  {
    id:'contraindicaciones',
    title:'Contraindicaciones',
    description:'Está contraindicada durante los tres primeros meses del embarazo. Enfermedades infecciosas de la piel y otras no infecciosas generalizadas. Úlceras por decúbito y quemaduras. Enfermedades vasculares inflamatorias inflamaciones de los ganglios linfáticos y cadenas ganglionares.',
    href:'/contraindicaciones',
  },
]

export const Section1 = () => {
  return (
    <div className="pt-20">
      <h1 className="text-center text-c-malva text-xl pb-24 font-medium sm:text-4xl">¿Qué sabes de quiromasaje?</h1>
      <div className="flex flex-wrap justify-between px-8 mx-0 sm:mx-20">
      {listData.map((item)=>(
      <div key={item.id} className="max-w-sm my-2 bg-slate-100 rounded-xl shadow-md overflow-hidden">
        <div>
          { item.id === 'definicion' ?
            <div className="md:shrink-0">
              <img className="h-48 w-full object-cover" src={Quiro2} alt="data" />              
            </div>
          : item.id === 'beneficios' ?
            <div className="md:shrink-0">
              <img className="h-48 w-full object-cover" src={Quiro1} alt="data" />              
            </div>
          : <div className="md:shrink-0">
              <img className="h-48 w-full object-cover" src={Quiro3} alt="data" />              
            </div>
          }
          <div className="p-8">
            <div className="texto1 text-center uppercase tracking-wide text-sm text-c-malva font-semibold">{item.title}</div>
            <p className="mt-2 text-slate-500 justify-center items-center">{item.description}</p>
          </div>
          <div className="self-end mb-4 ml-60">
            <Link to='/' className="bg-c-malva text-c-fondo rounded-md py-2 px-4 hover:opacity-50">Leer más</Link>
          </div>
        </div>
      </div>
      ))}
      </div>
    </div>
  )
}

/*<div className="max-w-md mx-auto bg-slate-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div>
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={Quiro1} alt="Trulli" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Fig.1 - Trulli, Puglia, Italy.</div>
            <p className="mt-2 text-slate-500"> l;scj;de'tr'n'tr\;nht\</p>
          </div>
        </div>
      </div>*/
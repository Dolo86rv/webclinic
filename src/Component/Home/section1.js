import React from 'react'
import { Button } from '../Assistant/buttonPurple'
import { ListData } from '../Contents/listdata'

export const Section1 = () => {
  return (
    <div className="pt-16 sm:pt-20" id="section1">
      <h1 className="text-center text-c-malva text-xl pb-20 sm:pb-24 font-medium sm:text-4xl">¿Qué sabes de quiromasaje?</h1>
      <div className="flex flex-wrap justify-between px-6 mx-0 sm:mx-20">
      {ListData.map((item)=>(
      <div key={item.id} className="max-w-sm my-2 bg-slate-100 rounded-xl shadow-md overflow-hidden">
        <div>
          <div className="md:shrink-0">
              <img className="h-48 w-full object-cover" src={item.src} alt="data" />              
            </div>
          <div className="p-8">
            <div className="texto1 text-center uppercase tracking-wide text-sm text-c-malva font-semibold">{item.title}</div>
              <ul>
                <li className="mt-2 text-slate-500 justify-center items-center">{item.description}<br/></li>
              </ul>
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

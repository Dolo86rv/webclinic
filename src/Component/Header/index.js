import React, { useState } from 'react'
import { useLocation } from 'wouter'
import { Fecha } from '../Fecha'
import { Navbar } from './navbar'
import { ButtonPurple } from '../Assistant/buttonPurple'
import { menu } from '../Contents/listmenu'
import { TabRedsocial } from '../Assistant/tabredsocial'

export const Header = () => {
  const isLogged=false
    const [active, setActive]=useState(false)
    const [keyword, setKeyword]=useState('')
    const [path, pushLocation]=useLocation()
  
    const handleSubmit=evt=>{
        evt.preventDefault()
        console.log(keyword)
        pushLocation(`/search/${keyword}`)
    }

    const handleChange=evt=>{
        setKeyword(evt.target.value)
    }

    const handleClick=()=>{
        setActive(!active)
    }
  return (
    <header className="header fixed top-0 w-full h-fit z-50 overflow-hidden">
      <div className="flex flex-col justify-between max-h-56 bg-c-malva sm:h-14 sm:flex-row sm:items-center">
        <div className="flex items-center ml-2 sm:ml-4 ">
          <TabRedsocial />
        </div>
        <Fecha />
        <div className="flex ml-1 my-4 sm:ml-0 sm:my-1 mr-4">
            <form className="flex" onSubmit={handleSubmit}>
                {active && 
                <div>
                    <input onChange={handleChange} type="text" value={keyword} placeholder='Buscar' className="rounded-md " />
                </div>
                }
                <button onClick={handleClick} className="bg-c-fondo rounded py-1 px-4 mx-4 hover:opacity-75">
                <span className="text-c-malva">Buscar</span>
                </button>
            </form>
            {
                isLogged
                ? <ButtonPurple text="Salir" dir='/logout'  />
                : <ButtonPurple text="Acceder" dir='/login'  />
            }
        </div>
      </div>
      <Navbar list={menu} />
    </header>
  )
}

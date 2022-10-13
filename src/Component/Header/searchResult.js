import React, { useState } from 'react'
import { ButtonPurple } from '../Assistant/buttonPurple'
import { useLocation } from 'wouter'

export const SearchResult = () => {
    const isLogged=false
    const [active, setActive]=useState(false)
    const [keyword, setKeyword]=useState('')
    const [path, pushLocation]=useLocation()
  //console.log(path)

    const handleSubmit=evt=>{
        evt.preventDefault()
        console.log(keyword)
        pushLocation(`/${keyword}`)
    }

    const handleChange=evt=>{
        setKeyword(evt.target.value)
    }

    const handleClick=()=>{
        setActive(!active)
    }

    return (
        <div className="flex ml-1 my-4 sm:ml-0 sm:my-1 mr-4">
            <form className="flex" onSubmit={handleSubmit}>
                {active && 
                <div>
                    <input onChange={handleChange} type="text" placeholder='Buscar' className="rounded-md " />
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
    )
}

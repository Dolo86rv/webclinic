import React, { useState } from 'react'
import { ButtonPurple } from '../Assistant/buttonPurple'
import { useLocation } from 'wouter'

export const FormSearch = () => {
    const isLogged=false
    const [keyword, setKeyword]=useState('')
    const [path, pushLocation]=useLocation()
    
  //console.log(path)

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <div className="flex ml-1 my-4 sm:ml-0 sm:my-1 mr-4">
            <form className="flex" onSubmit={handleSubmit} id="formulario">
                <div>
                    <input 
                        className="rounded-md"
                        onChange={handleChange}
                        placeholder='Buscar'
                        type="text" 
                        value={keyword}
                    />
                </div>
                <button className="bg-c-fondo rounded py-1 px-4 mx-4 hover:opacity-75">
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

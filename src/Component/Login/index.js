import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { HashLink as Link } from 'react-router-hash-link'
import { useLocation} from 'wouter'
//import { Menu } from '@headlessui/react'
//import { Fragment } from 'react'



export const Login = () => {
  const [userName, setUsername]= useState('')
  const [password, setPassword]= useState('')
  const [, navigate]=useLocation()

  const { register, formState:{errors}}=useForm()

  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="flex-grow w-full mt-28">
        <div className="text-center max-w-md mx-auto">
          <div className=" items-center">
            <h5 className="texto2 pb-3 pt-8 text-c-malva text-2xl font-bold">Iniciar sesión</h5>
          </div>
          <form onSubmit={handleSubmit} className="flex-col border rounded-md border-c-malva border-opacity-50 max-w-sm bg-c-malva bg-opacity-40 p-3">
            <div className="py-4">
              <input 
                type='text' {...register('user', {required:true})} 
                onChange={e=> setUsername(e.target.value)} 
                value={userName} 
                placeholder='User' 
                className="border-c-malva rounded-md" 
              />
              {errors.user?.type==='required' && <p>Por favor introduzca el usuario</p> }
            </div>
            <div>
              <input 
                type="password" {...register('password', {required:true})} 
                onChange={e=> setPassword(e.target.value)} 
                value={password} 
                placeholder='Password' 
                className="border-c-malva rounded-md" 
              />
              {errors.password?.type === 'required' && <p>Por favor introduzca la contraseña</p>}
            </div>
            <div className="my-4">
              <button type='submit' name='' value='' className="bg-c-malva px-[94px] py-2 rounded-md text-c-fondo">Acceder</button>
            </div>
          </form>
          <div className="mt-3 max-w-sm border border-c-malva border-opacity-50 rounded-md">
            <div className="flex justify-center items-center py-3">
              <p className="pr-1">¿Aún no tienes cuenta?.</p>
              <Link to='/register' className="italic font text-c-rose">Regístrate</Link>
            </div>
          </div> 
        </div>
    </div> 
)
}
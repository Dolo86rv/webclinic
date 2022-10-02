//import React, { useState } from 'react'
import { HashLink as Link} from 'react-router-hash-link'
import { useForm } from 'react-hook-form'
//import { Menu } from '@headlessui/react'
//import { Fragment } from 'react'



export const Login = () => {
  const { register, formState:{errors}, handleSubmit}=useForm()

  return (
    <div className="flex-grow w-full mt-28">
        <div className="text-center max-w-md mx-auto">
          <div className=" items-center">
            <h5 className="texto2 pb-3 pt-8 text-c-malva text-2xl font-bold">Iniciar sesión</h5>
          </div>
          <form onSubmit={handleSubmit()} className="flex-col border rounded-md border-c-malva border-opacity-50 max-w-sm bg-c-malva bg-opacity-40 p-3">
            <div className="py-4">
              <input type='text' {...register('user', {required:true})} placeholder='User' className="border-c-malva rounded-md" />
              {errors.user?.type==='required' && <p>Por favor introduzca el usuario</p> }
            </div>
            <div>
              <input type="password" {...register('password', {required:true})} placeholder='Password' className="border-c-malva rounded-md" />
              {errors.password?.type === 'required' && <p>Por favor introduzca la contraseña</p>}
            </div>
            <div className="my-4">
              <button type='submit' name='' value='' className="bg-c-malva px-[94px] py-2 rounded-md text-c-fondo">Acceder</button>
            </div>
          </form>
          <div className="mt-3 max-w-sm border border-c-malva border-opacity-50 rounded-md">
            <div className="flex justify-center items-center py-3">
              <p className="pr-1">¿Aún no tienes cuenta?.</p>
              <Link to="/" className="italic font text-c-rose">Regístrate</Link>
            </div>
          </div> 
        </div>
    </div> 
)
}

/*    
    <Menu>
      <Menu.Button>Options</Menu.Button>
      <Menu.Items>
        {links.map((link) => (
          Use the `active` state to conditionally style the active item. 
          <Menu.Item key={link.href} as={Fragment}>
            {({ active }) => (
              <a
                onClick={handleClick}
                href={link.href}
                className={`${
                  active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                }`}
              >
                {link.label}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
    
    const links = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
]
    */

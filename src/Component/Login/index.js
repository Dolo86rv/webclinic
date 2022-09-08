import React, { useState } from 'react'
//import { HashLink as Link} from 'react-router-hash-link'
import { Menu } from '@headlessui/react'
import { Fragment } from 'react'

const links = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
]

export const Login = () => {
  const [active, setActive]=useState(false)
  
  const handleClick=()=>{
    setActive(!active)
  }
  return (
        <div className="mr-8">
        <Menu>
      <Menu.Button>Options</Menu.Button>
      <Menu.Items>
        {links.map((link) => (
          /* Use the `active` state to conditionally style the active item. */
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
        </div> 
)
}

/*<div className="flex-grow w-96 h-80 bg-c-malva ">
        <h5>Login</h5>
        <input type='text' name='usuario' value='' placeholder='user' />\
        <input type="password" name='contrasena' value='' placeholder='password' />
        <input type='submit' name='' value='Ingresar'  />
        <Link to='#'>¿Olvidaste tu contraseña?</Link>
    </div>*/

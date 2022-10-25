import React from 'react'
import { FormRegister } from '../Assistant/formregister'

export const Register = () => {
  return (
    <div className="flex-grow w-full mt-28 text-center items-center">
        <p className=" text-c-malva font-bold mt-5 text-2xl texto1">Bienvenido!</p>
        <FormRegister />
    </div>
  )
}

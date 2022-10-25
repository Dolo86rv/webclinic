import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormRegister = () => {
    const [userName, setUsername]= useState('')
    const [email, setEmail] = useState('')
    const { register, handlesubmit, formState:{errors}}=useForm()

    const handleChange = evt => {
        setEmail(evt.target.value)
    }
    return (
        <div className="max-w-md mx-auto mt-7">
            <form onSubmit={handlesubmit} className="flex-col border border-c-malva rounded-md border-opacity-50">
                <div className="py-2">
                    <input 
                        className="rounded"
                        onChange={e => setUsername(e.target.value)}
                        placeholder='Nombre'
                        value={userName}
                        type='text' {...register('name', 
                            {
                                required:{
                                    value:true,
                                    message:'Introduzca el nombre por favor'
                                }
                            })
                        }
                    />
                    {errors.name?.type ==='required' && <span>{errors.name?.message}</span> }
                </div>
                <div className="py-2">
                    <input 
                        className="rounded"
                        onChange={handleChange}
                        placeholder='Email'
                        value={email}
                        type='text' {...register('email', {required:true})}
                    />
                    {errors.email?.type ==='required' && <p>Por favor introduzca el email</p> }
                </div>
                <div className="py-2">
                    <input
                        className="rounded"
                        onChange={handleChange}
                        placeholder='Contraseña'
                        value={email}
                        type='text' {...register('password', {required:true})}
                    />
                    {errors.password?.type ==='required' && <p>Por favor introduzca la contraseña</p> }
                </div>
            </form>
        </div>
    )
}

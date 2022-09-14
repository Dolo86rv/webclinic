import React from 'react'
import { useForm } from 'react-hook-form'

export const FormReserve = () => {
    const {register, handleSubmit}= useForm()

    const onSubmit=(data)=>{
        console.log(data)
    }

    return (
    <>
        <h1 className="texto2 font-semibold text-xl text-center mt-4">Reservar cita</h1>
        <div className="w-full max-w-xs mx-auto rounded h-[500px] mt-4 border shadow-lg border-c-malva border-opacity-50 shadow-slate-300">
            <div className="max-w-[280px] mt-5 text-center mx-auto">
                <p className="text-sm px-2">Reserve su cita, le llegará un sms de confirmación. Gracias.</p>
            </div>
            <form className="w-full max-w-[250px] mt-4 ml-[53px]" onSubmit={handleSubmit(onSubmit)}>
                <div className="py-2">
                    <input className="text-sm" type='text' placeholder='Nombre y Apellidos' {...register('name', { required:true })} />
                </div>
                <div className="py-2">
                    <input className="text-sm" type='text' placeholder='Número de teléfono' {...register('telefono', { required:true })}/>
                </div>
                <div className="py-2">
                    <input className="text-sm" type='text' placeholder='Seleccionar fecha' {...register('fecha', { required:true })} />
                </div>
                <div className="py-2">
                    <input className="text-sm" type='text' placeholder='Selecionar hora' {...register('hora', { required:true })} />
                </div>
                <div className="py-2">
                    <select className="text-sm" {...register('servicio', { required:true })}>
                        <option value="">Seleccione el servicio</option>
                        <option value="relajante">Masaje Relajante</option>
                        <option value="tonificante">Masaje Tonificante</option>
                        <option value="deportivo">Quiromasaje Deportivo</option>
                    </select>
                </div>
                <div className="mt-4 ml-12">
                    <input type="submit" value="Reservar" className="bg-c-malva opacity-75 text-c-fondo rounded-md py-1 px-5 hover:opacity-50" />
                </div>
            </form>
        </div>
    </>    
)
}
/**/
import React from 'react'

export const FormReserve = () => {
    return (
    <>
        <h1 className="texto2 font-semibold text-xl text-center mt-4">Reservar cita</h1>
        <div className="w-full max-w-xs mx-auto rounded h-[500px] mt-4 border shadow-lg border-c-malva border-opacity-50 shadow-slate-300">
            <div className="max-w-[250px] mt-4 text-center mx-auto">
                <p className="text-sm px-2">Reserve su cita, nosotros le llamaremos para confirmar. Gracias.</p>
            </div>
            <form className="max-w-[250px] text-center mt-4">
                <div className="py-2">
                    <input className="text-sm" type='text' placeholder='Nombre y Apellidos' name='name' />
                </div>
                <div className="py-2">
                    <input className="text-sm" type='text' placeholder='Número de teléfono' name='telefono'/>
                </div>
                <div className="py-2">
                    <input className="text-sm" type='text' placeholder='Seleccionar fecha' name='email' />
                </div>
                <div className="py-2">
                    <input className="text-sm" type='text' placeholder='Selecionar hora' name='hora' />
                </div>
                <div className="py-2">
l                   <select className="text-sm">
                        <option value="">Seleccione el servicio</option>
                        <option value="relajante">Masaje Relajante</option>
                        <option value="tonificante">Masaje Tonificante</option>
                        <option value="deportivo">Quiromasaje Deportivo</option>
                    </select>
                </div>
                <div className="py-8">
                    <button type="submit" className="bg-c-malva opacity-75 text-c-fondo rounded-md py-1 px-4 hover:opacity-50">Reservar</button>
                </div>
            </form>
        </div>
    </>    
)
}
/**/
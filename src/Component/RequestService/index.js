import React from 'react'
import { FormReserve } from './formreserve'
import Quiromasaje from '../../img/quiromasaje-superior.jpg'

export const RequestService = () => {
    return (
    <div className="flex-grow w-full mt-28">
        <div className="flex flex-col ">
            <div className="w-full relative">
                <picture>
                    <img src={Quiromasaje} alt='Imagen de fondo' className="max-w-full h-auto" width="100%" />
                </picture>
            </div>
            <div className="absolute max-w-7xl grid grid-cols-2 gap-4 mx-10 ">
                <div className="mx-8 mt-20">
                    <div className=" bg-c-malva opacity-60 text-c-fondo rounded ">
                        <div className="p-4">
                            <p className="pt-1">Reservar Online es la mejor opción para pedir una cita. Es muy sencillo. ¡Sólo tienes que Rellenar los datos personales, seleccionar el servicio que prefieres, especificar el día y hora en el que deseas Disfrutar de un buen masaje!. Se aconseja reservar con 24 horas de antelación.</p>
                            <p className="pt-1">También puedes reservar por teléfono o WhatsApp  +34 609 592636 o bien vía email a veronica.orellana@gmail.com.</p>
                            <p className="pt-4">¡Muchas gracias por confiar en nosotros!.</p>
                            <p className=" pl-5">¡Te esperamos!</p>
                        </div>
                    </div>
                </div>
                <FormReserve />
            </div>
        </div>
    </div>
)
}

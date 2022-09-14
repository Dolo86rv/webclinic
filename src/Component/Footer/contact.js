import React from 'react'
import { ListContact } from '../Contents/listcontac'

export const Contact = () => {
    return (
    <div className="flex-grow w-1/3 pt-12">
        <div className="pl-6">
            <h2 className="texto1 uppercase tracking-wide text-sm text-c-rose font-semibold pb-3">contacto</h2>
            {ListContact.map((item)=>(
            <div key={item.id} className="flex flex-col">
                <div className="flex items-center pr-2 pb-3">
                    <div className="pl-2 flex-none">
                        <img className="opacity-75 object-cover" src={item.img} alt={item.id} width="20" height="20"/>
                    </div>
                    <div className="pl-4 pr-2">
                        <p className="text-c-fondo opacity-75">{item.description}</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    )
}

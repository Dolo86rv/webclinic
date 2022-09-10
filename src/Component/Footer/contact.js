import React from 'react'
import { ListContact } from '../Contents/listcontac'

export const Contact = () => {
    return (
    <div className="w-1/3 mt-20">
        <h2 className="texto1 uppercase tracking-wide text-sm text-c-rose font-semibold">contacto</h2>
        <div className="mt-4">
            {ListContact.map((item)=>(
            <div key={item.id} className="flex flex-col py-2">
                <div className="flex">
                    <div>
                        <img className="pr-2" src={item.img} alt={item.id} width="35" height="35"/>
                    </div>
                    <div className="">
                        <p className="text-c-fondo opacity-50">{item.description}</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    )
}

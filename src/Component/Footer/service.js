import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { ListMassage } from '../Contents/listmassage'

export const Service = () => {
    return (
    <div className="pt-0 md:pt-24">
        <div className="md:pl-6">
            <h2 className="texto1 uppercase tracking-wide text-sm text-c-rose font-semibold pb-3 ">servicios</h2>
            {ListMassage.map((item)=>(
                <div key={item.id} className="flex flex-col pb-3">
                    <Link to={item.href} className="text-c-fondo opacity-75">{item.description}</Link>
                </div>
            ))}
        </div>
    </div>
    )
}

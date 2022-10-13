import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { ListMassage } from '../Contents/listmassage'

export const Service = () => {
    return (
    <div className="pt-0 md:pt-24">
        <Link to='/servicio' className="texto1 uppercase tracking-wide text-sm text-c-rose font-semibold">servicios</Link>
            {ListMassage.map((item)=>(
                <div key={item.id} className="flex flex-col pt-3">
                    <Link to={item.href} className="text-c-fondo opacity-75 hover:text-c-rose">{item.description}</Link>
                </div>
            ))}
    </div>
    )
}

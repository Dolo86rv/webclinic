import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export const AboutUs = () => {
    return (
    <div className="w-1/3">
        <Link className="logo text-3xl text-c-fondo pb-2 sm:text-4xl" to='/'>Quiromasaje</Link>
        <div className="border-r border-c-rose border-opacity-75 pr-4">
            <h2 className="pt-8 texto1 uppercase tracking-wide text-sm text-c-rose font-semibold">Sobre Nosotros</h2>
            <p className="py-4 text-c-fondo opacity-50">Ofrecemos a su disposición las técnicas más variadas con el propósito de <strong className="uppercase text-c-rose">aliviar</strong> sus dolores musculares y <strong className="uppercase text-c-rose">mejorar</strong> su movilidad.</p>
            <p className="text-c-fondo opacity-50">Contamos con un personal altamente cualificado en las diferentes técnicas existentes y con los mayores deseos de mejorar su <strong className="uppercase text-c-rose">calidad de vida</strong>.</p>
        </div>
        </div>
    )
}

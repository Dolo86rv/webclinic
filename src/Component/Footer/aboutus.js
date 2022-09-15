import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export const AboutUs = () => {
    return (
    <div className="pt-8">
        <Link className="logo text-3xl text-c-fondo sm:text-4xl" to='/'>Quiromasaje</Link>
        <div className="pt-7">
            <div className="pr-6 md:border-r border-c-rose border-opacity-50">
                <h2 className="texto1 uppercase tracking-wide text-sm text-c-rose font-semibold">Sobre Nosotros</h2>
                <div className="py-4">
                    <p className=" pb-2 text-c-fondo opacity-75">Ofrecemos a su disposición las técnicas más variadas con el propósito de <strong className="uppercase text-c-rose">aliviar</strong> sus dolores musculares y <strong className="uppercase text-c-rose">mejorar</strong> su movilidad.</p>
                    <p className="text-c-fondo opacity-75">Contamos con un personal altamente cualificado en las diferentes técnicas existentes y con los mayores deseos de mejorar su <strong className="uppercase text-c-rose">calidad de vida</strong>.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

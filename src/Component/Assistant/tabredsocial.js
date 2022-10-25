import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const redes=[
    {
        id:'facebook',
        src: require('../../img/fcb-28.png')
    },
    {
        id:'twitter',
        src: require('../../img/twit-28.png')
    },
    {
        id:'whatsapp',
        src: require('../../img/whatsapp-28x28.webp')
    },
    {
        id:'instagram',
        src: require('../../img/instagram-28x.webp')
    }
]

export const TabRedsocial = () => {
    return (
        <div className="flex items-center md:mx-10 py-4">
            {redes.map(item =>(
                <Link className="mx-2" to='/'>
                    <img className="object-cover flex-none" src={item.src} width={20} height={20} alt={item.id}/>
                </Link> 
            ))}
        </div>
        )
}
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import instagram from '../../img/instagram-28x.webp'
import whatsapp from '../../img/whatsapp-28x28.webp'
import twitter from '../../img/twitt-28x28.webp'
import facebook from '../../img/facebok-28x28.webp'

export const TabRedsocial = () => {
    return (
        <div className="flex items-center md:mr-10 py-4">
            <Link className="" to='/'>
                <img className="object-cover" src={facebook} width={40} height={40} alt=''/>
            </Link> 
            <Link className="pr-4" to='/'>
                <img className="object-cover" src={twitter} width={35} height={35} alt='' />
            </Link>
            <Link className="pr-3" to='/'>
                <img className="object-cover" src={whatsapp} width={20} height={20} alt='' />
            </Link>
            <Link className="" to='/'>
                <img className="object-cover" src={instagram} width={20} height={20} alt='' />
            </Link>
        </div>
        )
}

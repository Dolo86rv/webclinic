import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export const ButtonTransparent = ({text,dir}) => {
  return (
    <>
        <Link to={dir} className="bg-transparent border border-c-fondo text-c-fondo rounded-md py-1 px-4 hover:opacity-50">{text}</Link>
    </>
  )
}

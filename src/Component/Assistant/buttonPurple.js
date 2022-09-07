import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export const Button = ({text,dir}=this.props) => {
  return (
    <>
    <Link to={dir} className="bg-c-malva opacity-75 text-c-fondo rounded-md py-1 px-4 hover:opacity-50">{text}</Link>
    </>
  )
}

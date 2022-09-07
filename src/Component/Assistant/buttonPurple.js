import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export const Button = ({text}=this.props) => {
  return (
    <>
    <Link to='#section1' className="bg-c-malva opacity-75 text-c-fondo rounded-md py-2 px-4 hover:opacity-50">{text}</Link>
    </>
  )
}
